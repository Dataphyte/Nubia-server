import mongoose, { Schema } from 'mongoose';

type ProjectType = {
  name: string;
  dataUrl: string;
  template: {
    text: string;
    file: string;
  };
  variables: Array<string>;
  chat: Array<string>;
};

const ProjectSchema = new Schema<ProjectType>(
  {
    name: String,
    dataUrl: String,
    template: {
      text: String,
      file: String,
    },
    variables: [String],
    chat: [String],
  },
  { timestamps: true, collection: 'projects' }
);

const ProjectModel = mongoose.model('projects', ProjectSchema);

export default ProjectModel;
