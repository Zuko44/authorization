export const comeInHandler = async (
  value: number,
  value2: number,
): Promise<any> => {
  // const data = {
  //   phoneNumber: phoneNumber.value,
  //   password: password.value,
  // };
  const formData = new FormData();
  formData.set('phoneNumber', value.toString());
  formData.set('password', value2.toString());

  // const response = await fetch('http://localhost/test/login.php', {
  const response = await fetch(
    'https://backend-front-test.dev.echo-company.ru/api/auth/login',
    {
      method: 'POST',
      body: formData,
    },
  );

  const result = await response.json();
  console.log(result);
  return result;
};
