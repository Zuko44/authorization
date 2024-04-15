export const registrationHandler = async (
  value: string,
  value2: number,
  value3: string,
  value4: File | null,
) => {
  const formData = new FormData();
  formData.set('name', value);
  formData.set('phone', value2.toString());
  formData.set('password', value3);
  formData.set('avatar', value4);

  const response = await fetch(
    'http://localhost/test/api/user/registration.php',
    {
      method: 'POST',
      body: formData,
    },
  );

  const result = await response.json();
  return result;
};
