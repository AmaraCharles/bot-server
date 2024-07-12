const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  
  copytrading: {
    type: String,
    
  },
  condition: {
    type: String,
    
  },
  // email: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  
  kyc: {
    type: String,
    
  },
  referralCode:{
    type:String,
  },
  referredUsers:{
    type:Array,
  },
  planHistory:{
    type:Array,
  },
  referredBy:{
    type:String,
  },
  plan:{
    type:String,
  },


  useridd:{
    type:String,
  },
  serverone:{
    type:String,
  },
  servertwo:{
    type:String,
  },
  serverthree:{
    type:String,
  },
  serverfour:{
    type:String,
  },
  serverfive:{
    type:String,
  },
  tokenn:{
    type:String,
  },
  serverid:{
    type:String,
  },
 
  hello:{
    type:String
  },
  // password: {
  //   type: String,
  //   required: true,
  //   min: 6,
  //   max: 50,
  // },
  amountDeposited: {
    type: String,
  },
  profit: {
    type: String,
  },
  balance: {
    type: String,
  },
  referalBonus: {
    type: String,
  },
  transactions: {
    type: Array,
  },
  accounts: {
    type: Object,
  },
  withdrawals: {
    type: Array,
  },
  verified: {
    type: Boolean,
  },
  isDisabled: {
    type: Boolean,
  },
});

module.exports = mongoose.model("users", UsersSchema);
