import mongoose, { Schema } from 'mongoose';
import { ParseResult } from 'papaparse';

export type ProjectType = {
  projectName: string;
  projectDesc: string;
  stories?: [string];
  projectData?: {
    parseed: ParseResult<any>;
    contents: string;
    details: { fileName: string; fileSize: string };
  };
  dataFileUrl?: string;
  template?: string;
  formula?: string;
  status: [{ id: number; text: string; complete: boolean }];

  chat?: [string];
};

const ProjectSchema = new Schema<ProjectType>(
  {
    projectName: String,
    projectDesc: String,
    stories: [String],
    projectData: {
      parsed: {},
      contents: String,
      details: { fileName: String, fileSize: String },
    },
    dataFileUrl: String,
    template: String,
    formula: String,
    status: [{ id: Number, text: String, complete: Boolean }],
    chat: [String],
  },
  { timestamps: true, collection: 'projects' }
);

const ProjectModel = mongoose.model('projects', ProjectSchema);

export default ProjectModel;
