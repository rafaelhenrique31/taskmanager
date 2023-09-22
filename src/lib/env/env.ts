export interface EnvironmentVariables {
  env: string;
  urlTaskManager: string;
}

const ENV: EnvironmentVariables = {
  env: import.meta.env.VITE_ENV,
  urlTaskManager: import.meta.env.VITE_URL_TASK_MANAGER,
};

export default ENV;
