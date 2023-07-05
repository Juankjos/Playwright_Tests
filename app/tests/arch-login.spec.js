const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../src/utils/fixtures.js')
require('dotenv').config();

//Variables to login
const arch_url = process.env.URL_ARCHIVISTICA_TEST;
const arch_user = process.env.USER_ARCHIVISTICA_TEST;
const arch_pass = process.env.PASS_ARCHIVISTICA_TEST;

//Loop for all the test cases to login
// test.beforeEach(async ({ page }) => {
//   //Goes to the url
//   await page.goto(arch_url);
//   //Gets the variables to get logged
//   const loginPage = new LoginPage(page);
//   await loginPage.submitLoginForm(arch_user, arch_pass);
// });

test.describe('Register for first time', ()=>{
  test('Should be at the main page', async ({ page }) => {
    await expect(page).toHaveURL("http://192.168.0.227/arch_testing_e2e/pages/login");
  });

  test('Should let me register', async ({ page }) => {
    //Get the register button
    await page.getByText('Registrarme').click();
    //Fill the fields
    await page.getByPlaceholder('Nombre').fill('Test');
    await page.getByPlaceholder('Correo').fill('test@test.com');
    await page.getByPlaceholder('Contraseña', { exact: true }).fill('12345678');
    await page.getByPlaceholder('Confirmar contraseña').fill('12345678');
    await page.getByPlaceholder('Ingresa el captcha').click();
    await page.getByPlaceholder('Ingresa el captcha').fill('qwerty');
    //Create enterprise
    // await page.getByPlaceholder('Nombre de la empresa', {timeout: 3000}).click();
    // await page.getByPlaceholder('Nombre de la empresa').fill('Empresa Test');
    //Or select enterprise
    await page.getByText('Arch_Testing_E2E').click();
    await page.getByRole('button', { name: 'Continuar' }).click();
    //Create department
    // await page.getByPlaceholder('Ej. Departamento de gestión de archivos').click();
    // await page.getByPlaceholder('Ej. Departamento de gestión de archivos').fill('Departamento Test');
    //Or select department
    await page.getByText('Pruebas').click();
    await page.getByRole('button', { name: 'Continuar' }).click();
    await page.getByRole('button', { name: 'Si, continuar!' }).click();
  });

  test('Should let me login', async ({ page }) => {
    await page.goto("http://192.168.0.227/arch_testing_e2e/pages/login");
    await page.getByPlaceholder('Usuario').fill('test@test.com');
    await page.getByPlaceholder('Contraseña').fill('12345678');
    await page.getByText('Iniciar sesión').click();
    //In case it doesn't taked the values from previous test (An error)
    const selectEnterprise = await page.$$("text='Arch_Testing_E2E'");
    if(selectEnterprise){
      console.log('Enter validation - Should not happen');
      await page.getByText('Arch_Testing_E2E').click();
      await page.getByRole('button', { name: 'Continuar' }).click();
      await page.getByText('Pruebas').click();
      await page.getByRole('button', { name: 'Continuar' }).click();
      await page.getByRole('button', { name: 'Si, continuar!' }).click();
      await page.getByRole('link', { name: 'Continuar' }).click();
    }
  });
});