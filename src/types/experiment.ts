// /**
//  * Experiment-related type definitions
//  */

export interface ExperimentsPageProps {
  experiments: Experiment[];
  typeColors: Record<string, string>;
}

export interface ExperimentDetailPageProps {
  experiment: Experiment;
  typeColors: Record<string, string>;
}

export type ExperimentType =
  | "experiment"
  | "prototype"
  | "tool"
  | "research"
  | "open-source";

export interface ExperimentApproachStep {
  title: string;
  description: string;
}

export interface ExperimentTechStackItem {
  name: string;
  role: string;
}

export interface ExperimentKeyInsight {
  title: string;
  description: string;
}

export interface ExperimentLearnings {
  worked: string[];
  didntWork: string[];
}

export interface ExperimentApproach {
  description: string;
  steps: ExperimentApproachStep[];
}

export interface ExperimentLinks {
  demo?: string;
  github?: string;
}

export interface Experiment {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  type: string;
  icon: string;
  links: ExperimentLinks;
  order?: number;
  // Detail fields (for experiment detail page)
  status?: string;
  date?: string;
  motivation?: string;
  approach?: ExperimentApproach;
  techStack?: ExperimentTechStackItem[];
  learnings?: ExperimentLearnings;
  keyInsights?: ExperimentKeyInsight[];
  futurePlans?: string;
  codeHighlight?: string;
}
