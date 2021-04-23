export let dateComparator = (valueA: string, valueB: string, nodeA?: any, nodeB?: any, isInverted?: any) => {
  let date1 = toDate(valueA);
  let date2 = toDate(valueB);

  if(date1 == date2) return 0;
  return (date1 > date2) ? 1 : -1;
}

export function toDate(valor: string): Date {
  let dia = Number.parseInt(valor.substring(0, 2));
  let mes = Number.parseInt(valor.substring(3, 5));
  let ano = Number.parseInt(valor.substring(6, 10));
  let hora = Number.parseInt(valor.substring(11, 13));
  let minuto = Number.parseInt(valor.substring(14, 16));

  return new Date(ano, mes, dia, hora, minuto);
}

export function toString(data: Date){
  return data.getDate() + "/" +
        (data.getMonth() + 1).toString().padStart(2, '0') + "/" +
        data.getFullYear() + " " +
        data.getHours() + ":" +
        data.getMinutes();
}
