import mongoose from 'mongoose';
const subscriptionSchema= new mongoose.Schema({
    name: {
        type: String,
        required:[true, 'subscription Name is required'],
        trim:true,
        minLength:2,
        maxLength:100,
    },
    price:{
        type:Number,
        required: [true,'subscription price is required'],
        min:[0, 'price must be greater than 0'],
    },
    currency:{
        type:String,
        enum:['USD', 'EUR', 'RS'],

    },
    frequency:{
        type:String,
        enum:['daily','weekly','monthly','yearly'],

    },
    category:{
        type:String,
        enum:['sports','news','entertainment','lifestyle','technology', 'finance','others'],
        required:true, 
    },
    paymentMethod: {
        type: String,
        required: true,
        trim:true,

    },
    status:{
        type:String,
        enum:['active','cancelled','expired'],
    },
    startDate:{
        type:Date,
        required:true,
        validate:{
            validator:(value)=> value <= new Date(),
            message:'Start date must be in the past',
        }
    },
    renewalDate:{
        type:Date,
        validate:{
            validator: function (value){
            return value >this.startDate;
            } ,
            message:'renewal date must be after the start date',
        }
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
        index: true,

    }
}, {timestamps:true});

// Prevent duplicate subscriptions: same user can't subscribe to the same name twice
subscriptionSchema.index({ name: 1, user: 1 }, { unique: true });

subscriptionSchema.pre('save',function(){
    if(!this.renewalDate){
        const renewablePeriods={
            daily: 1,
            weekly:7,
            monthly:30,
            yearly:365,
        };
        this.renewalDate=new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate()+renewablePeriods[this.frequency]);
    }
    if(this.renewalDate< new Date()){
        this.status= 'expired';
    }
});

const Subscription = mongoose.model('Subscription',subscriptionSchema);

export default Subscription;