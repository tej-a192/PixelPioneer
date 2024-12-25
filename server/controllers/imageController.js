import axios from "axios"
import userModel from "../models/userModel.js"
import FormData from "form-data"


const imageGenerate = async (req, res)=> {

    try {
        const {userID, prompt} = req.body

        const user = await userModel.findById(userID)

        if(!user || !prompt) {

            return res.json({success:false, message: "Missing Details"})
        }

        if(user.creditBalance === 0 || userModel.creditBalance < 0) {
            return res.json({success:false, creditsleft: user.creditBalance})
        }

        const formData = new FormData()

        formData.append('prompt', prompt)

        const {data} = await axios.post("https://clipdrop-api.co/text-to-image/v1",formData, {
            headers: {
                'x-api-key': process.env.API_KEY,
            },
            responseType: 'arraybuffer'  
        })

        const base64Image = Buffer.from(data, 'binary').toString('base64')

        const resultImage = `data:image/png;base64,${base64Image}`;

        await userModel.findByIdAndUpdate(user._id, {
            creditBalance: user.creditBalance - 1
        })

        res.json({success:true, credits: user.creditBalance, resultImage})
        
    } catch (error) {
        console.error('Error generating image:', error); // Log the error for debugging
        res.json({
            success: false,
            message: "Failed to generate image",
            error: error.message
        });
    }
    
}

export default imageGenerate