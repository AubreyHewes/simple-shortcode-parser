export const introspectValue = (value: string | undefined, allowEmptyAttributes: boolean = true) => {
  if (value === undefined || value === "true") {
    return true;
  }
  if (value === "false") {
    return false;
  }
  if (/^\d+$/.test(value)) {
    return parseInt(value);
  }
  return value.replace(/^["']?(.+?)["']?$/, "$1");
};

export const parseAttributes = (attributes: string, allowEmptyAttributes?: boolean) => {
  if (!attributes) {
    return undefined;
  }
  return Array.from(attributes.trim().matchAll(/(\w+)(=("[^<>"]*"|'[^<>']*'|\w+))?/gi)).reduce(
    (
      params: {
        [key: string]: string | number | boolean;
      },
      paramMatch: any
    ) => {
      params[paramMatch[1]] = introspectValue(paramMatch[3], allowEmptyAttributes);
      return params;
    },
    {}
  );
};
