const buildUrlHelper = (url, version, route) => {
  return `${url}/api/${version}/${route}`;
};

export default buildUrlHelper;
