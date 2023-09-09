import { Document } from 'mongoose';
import ProjectModel, { ProjectType } from '../models/project.model';

class Prpject_Service {
  async CREATE(projectData: ProjectType): Promise<Document<any>> {
    const newProject = await ProjectModel.create(projectData);
    return newProject;
  }
}
