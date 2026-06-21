export interface Course {
  id: string;
  slug: string;
  title: string;
  image: string;

  shortDescription: string;
  introduction: string;

  modules: {
    title: string;
    topics: string[];
  }[];

  practicalTraining: string[];

  interviewPreparation: string[];

  outcome: string;
}