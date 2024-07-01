const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  jobTitle: {
    type: String,
    required: true
  },
  jobDescription: {
    type: String,
    required: true
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: 'CompanyDetails',
    required: true
  },
  location: {
    type: String,
    required: true
  },
  jobType: {
    type: String,
    enum: ['internship', 'full-time', 'part-time'],
    required: true
  },
  workMode: {
    type: String,
    enum: ['remote', 'onsite'],
    required: true
  },
  responsibilities: {
    type: String,
    required: true
  },
  requirements: {
    type: String,
    required: true
  },
  CTC: {
    type: Number,
  },
  stipend: {
    type: Number,
  },
  yearsOfExperience: {
    type: Number,
    required: true
  },
  jobVisibility: {
    type:String,
    enum:['private','public'],
    default:'public'
  },
  applicants: [{
    applicant:{
      type: Schema.Types.ObjectId,
      ref: 'Applicant',
    },
    appliedTime:{
      type:Date,
      default:Date.now
    },
  }]
});

// Pre-save hook to validate stipend and CTC
jobSchema.pre('save', function(next) {
  if (this.jobType === 'internship' && this.stipend == null) {
    return next(new Error('Stipend is required for internships'));
  }
  if (this.jobType !== 'internship' && this.CTC == null) {
    return next(new Error('CTC is required for full-time and part-time jobs'));
  }
  if (this.jobType === 'internship' && this.CTC != null) {
    return next(new Error('CTC should not be provided for internships'));
  }
  if (this.jobType !== 'internship' && this.stipend != null) {
    return next(new Error('Stipend should not be provided for full-time and part-time jobs'));
  }
  next();
});

// Create a model based on the schema
const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
