export const useCurrentRoute = () => {
  const router = useRouter()
  return router.currentRoute.value.path
}
