import _ from 'lodash';

export default async (config) => {
  if (_.isArray(config)) {
    for (let configInstance of config) {
      await new Promise(r => setTimeout(r, configInstance.delay || 3000));
      popform(configInstance);
    };
  } else {
    await new Promise(r => setTimeout(r, config.delay || 3000));
    popform(config);
  }
}

function popform(config) {
  _.each(config.fields, (field, key) => {
    _.each(document.getElementsByName(key), (element) => {
      if (typeof field === 'string') {
        element.value = field;
      } else {
        _.each(field, (value, key) => {
          if (_.isArray(element[key])) {
            element[key] = [
              ...element[key],
              ...value
            ];
          } else if (_.isObjectLike(element[key])) {
            _.merge(element[key], value);
          } else {
            element[key] = value;
          }
        });
      }
    });
  });

  _.each(config.elements, (elementConfig, key) => {
    const element = document.querySelector(elementConfig.query);
    _.each(elementConfig, (value, key) => {
      if (key !== 'query') {
        if (_.isArray(element[key])) {
          element[key] = [
            ...element[key],
            ...value
          ];
        } else if (_.isObjectLike(element[key])) {
          _.merge(element[key], value);
        } else {
          element[key] = value;
        }
      }
    });
  });

  if (config.submit) document.querySelector(config.submit).click();
}
