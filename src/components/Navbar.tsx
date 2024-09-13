import { UserButton } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import Link from "next/link"
import { checkUser } from "../../lib/checkUser"


const Navbar = async () => {

  const { userId } = auth()
  const user = await checkUser()
  console.log(user)

  return (
    <div className="bg-cyan-950 rounded-b-xl">
      <ul className="flex justify-between py-4 px-6">
        <div>
          <Link href='/'>
            <li>Home</li>
          </Link>
        </div>
        <div className="flex items-center">
          <Link href='/client'>
            <li>Client Page</li>
          </Link>
        </div>
        <div className="flex gap-6 items-center">
          {!userId ? (
            <>
              <Link href='/sign-in'>
                <li>Log in</li>
              </Link>
              <Link href='/sign-up'>
                <li>Sign up</li>
              </Link>
            </>
          ) : (
            <>
              <Link href='/profile'>
                <li>Profile</li>
              </Link>
              <li className="flex items-center">
                <UserButton />
              </li>
            </>
          )}

        </div>
      </ul>
    </div>
  )
}

export default Navbar