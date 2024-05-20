import { auth, signOut } from "app/auth";

export async function Auth() {
  let session = await auth();

  return (
    <div className="">
      <div className="">
        You are logged in as {session?.user?.email}
        <SignOut />
      </div>
    </div>
  );
}

function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit">Sign out</button>
    </form>
  );
}
