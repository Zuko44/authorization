export const comeInHandler = async (
  value: number,
  value2: string,
  value3: boolean,
) => {
  const formData = new FormData();
  formData.set('phoneNumber', value.toString());
  formData.set('password', value2.toString());
  formData.set('rememberMe', value3.toString());

  const response = await fetch('http://localhost/test/api/auth/login.php', {
    method: 'POST',
    body: formData,
  });

  const result = await response.json();
  return result;
};
