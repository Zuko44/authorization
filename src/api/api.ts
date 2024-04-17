export const sendPhone = async (value: number) => {
  const formData = new FormData();
  formData.set('phone', value.toString());

  const response = await fetch(
    'https://backend-front-test.dev.echo-company.ru/api/user/forgot.php',
    {
      method: 'POST',
      body: formData,
    },
  );

  const result = await response.json();
  return result;
};

export const sendSms = async (value: number) => {
  const formData = new FormData();
  formData.set('sms', value.toString());

  const response = await fetch(
    'https://backend-front-test.dev.echo-company.ru/api/user/forgot.php',
    {
      method: 'POST',
      body: formData,
    },
  );

  const result = await response.json();
  return result;
};
