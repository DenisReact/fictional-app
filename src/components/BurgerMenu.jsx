import classNames from "classnames";

export default function BurgerMenu({ open, setOpen }) {
  const baseLineStyle = "transition-all absolute bg-white block h-[3px] w-full rounded";
  const topActiveLineStyle = "rotate-45 -translate-y-1/2 top-1/2";
  const centerActiveLineStyle = "scale-0";
  const bottomActiveLineStyle = "-rotate-45 translate-y-1/2 bottom-1/2";

  const onToggleMenu = () => {
    document.body.classList.toggle("_lock");
    setOpen(!open);
  };

  return (
    <div
      className={"sm:hidden block absolute top-1/2 -translate-y-1/2 right-4  z-50 cursor-pointer w-8 h-6"}
      onClick={onToggleMenu}>
      <span className={classNames(baseLineStyle, { [topActiveLineStyle]: open })} />
      <span
        className={classNames(baseLineStyle, "top-1/2 -translate-y-1/2", {
          [centerActiveLineStyle]: open,
        })}
      />
      <span
        className={classNames(baseLineStyle, "bottom-0", {
          [bottomActiveLineStyle]: open,
        })}
      />
    </div>
  );
}
