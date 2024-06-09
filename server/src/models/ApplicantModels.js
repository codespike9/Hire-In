const mongoose=require("mongoose");
const bcrypt=require('bcrypt');

const applicantSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile_no: {
        type: Number,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    education:[
        {
            instituteName:{
                type:String,
                required:true
            },
            degree:{
                type:String,
                required:true
            },
            passingYear:{
                type:String,
                required:true
            }
        }
    ],
    skills:{
        type:[String]
    },
    projects:[
        {
            projectTitle:{
                type:String,
                required:true
            },
            projectDescription:{
                type:String,
                required:true
            },
            startingDate:{
                type:Date
            },
            completionDate:{
                type:Date
            }
        }
    ],
    resume:{
        type:String
    },
    profileVisibility:{
        type:String,
        enum:['private','public']
    }
});

applicantSchema.pre('save',async function(next){
    const user=this;

    if(!user.isModified('password'))
        return next();
    try{
        //hash password generation
        const salt=await bcrypt.genSalt(10);

        // hash password
        const hashedPassword=await bcrypt.hash(user.password,salt);
        user.password=hashedPassword;
        next();
    }catch(error){
        console.log(error);
    }
})

applicantSchema.methods.comparePassword=async function(candidatePassword){
    try{
        // console.log(candidatePassword)
        // console.log(this.username);
        const isMatch=await bcrypt.compare(candidatePassword,this.password);
        return isMatch;
    }
    catch(error){
        throw error
    }
}

const Applicant=mongoose.model('Applicant',applicantSchema);

module.exports={Applicant};