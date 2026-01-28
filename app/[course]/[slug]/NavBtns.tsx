import Link from "next/link";

const navBtnStyles =
  "bg-blue-500! dark:bg-blue-600! hover:bg-blue-600! dark:hover:bg-blue-700! text-black dark:text-white text-lg py-2 px-7 rounded cursor-pointer";

type NavBtnsProps = {
  id: number;
  course: string;
  last?: boolean;
};

function NavBtns({ id, course, last }: NavBtnsProps) {
  return (
    <div className="flex justify-center gap-x-7 mt-10 mb-15">
      <Link href={`/${course}/${id === 0 ? "" : id - 1}`} className={navBtnStyles}>
        Back
      </Link>
      <Link href={last ? "/" : `/${course}/${id + 1}`} className={navBtnStyles}>
        Next
      </Link>
    </div>
  );
}

export default NavBtns;
