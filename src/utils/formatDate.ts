const formatDate = (date: string): string => {
  const dados = date.split('-');
  const day =
    Number(dados[2].substr(0, 1)) < 10
      ? `0${dados[1].substr(0, 1)}`
      : dados[1].substr(0, 1);
  const month =
    Number(dados[1].substr(0, 1)) < 10
      ? `0${dados[1].substr(0, 1)}`
      : dados[1].substr(0, 1);
  const year = dados[0];
  return `${day}/${month}/${year}`;
};

export default formatDate;
