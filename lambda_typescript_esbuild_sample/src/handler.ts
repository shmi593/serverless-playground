// eslint-disable-next-line @typescript-eslint/require-await
export const handler = async (request, context) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  console.log({ request, context })
  return {
    statusCode: '200',
    body: { message: 'ok' },
  }
}
