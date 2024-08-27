const resetDatabase = async (request) => {
  await request.post('/api/testing/reset')
  await request.post('/api/users', {
    data: {
      name: 'Matti Luukkainen',
      username: 'mluukkai',
      password: 'salainen',
    },
  })
  await request.post('/api/users', {
    data: {
      name: 'Ted Tester',
      username: 'ted',
      password: 'tedsecret',
    },
  })
}

const login = async (page, username, password) => {
  await page.getByTestId('username').fill(username)
  await page.getByTestId('password').fill(password)
  await page.getByRole('button', { name: 'Login' }).click()
}

const createBlog = async (page, title, author, url) => {
  await page.getByRole('button', { name: 'create new blog' }).click()
  await page.getByTestId('title').fill(title)
  await page.getByTestId('author').fill(author)
  await page.getByTestId('url').fill(url)
  await page.getByRole('button', { name: 'Create' }).click()

  await page.getByText(`${title} by ${author}`).waitFor()
}

const likeTimes = async (page, button, n) => {
  for (let i = 0; i < n; i++) {
    await button.click()
    await page.getByText(`likes ${i + 1}`).waitFor()
  }
}

export { resetDatabase, login, createBlog, likeTimes }
