const postsArr = [
  {
    type: "fixed",
    contentCover: "link",
    viewsCount: "78K",
  },
];

const Posts: any = () => {
  postsArr.map((item, index) => {
    return (
      <div className="h-30rem w-[25%] rounded-full" key={index}>
        <span className="text-[15px] font-medium bg-tiktokRed rounded-full">
          {item.type}
        </span>
        <span className="text-[16px] font-bold">{item.viewsCount}</span>
      </div>
    );
  });
};

export default Posts;
