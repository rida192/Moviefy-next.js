import WordByWordAnimation from "./wordByWordAnimation";

const Title = ({ name, text }: TitleProps) => {
  return (
    <>
      <p className=" mb-8 text-2xl  tracking-[1px]">{name}</p>
      {text && (
        <div className="leading-[1.7] font-normal max-w-[640px] text-black dark:text-white/80">
          <WordByWordAnimation text={text} />
          {/* {text} */}
        </div>
      )}
    </>
  );
};

export default Title;
