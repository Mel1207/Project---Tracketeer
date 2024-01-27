export const useGetUserInfo = () => {
  const { name, avatar, userId, isAuth } = JSON.parse(localStorage.getItem('auth'))

  return {
    name, avatar, userId, isAuth
  }
}