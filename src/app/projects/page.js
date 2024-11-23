

export default function Projects(){
    const projects= [
        { name: "전자팩스 전송프로그램", en: "fax", imgpath: "/images/fax.png"},
        { name: "계약정보 관리프로그램", en: "contract", imgpath: "/images/contract.png"},
        { name: "점심메뉴 알리미", en: "menu", imgpath: "/images/menu.png"}
    ]
    return(
        <main className="flex justify-center items-center p-10">
            <div className="flex p-20 space-x-14">
                {projects.map((projects,index) => (
                    <div key={index} className="flex bg-white min-w-80 min-h-80 bg-opacity-80 flex-col items-center hover:scale-125
                    transform transition-transform duration-150">
                        <p className='items-center text-orange-800 text-2xl min-h-10'>{projects.name}</p>
                        <img
                            src= {projects.imgpath}
                            className=""
                            alt={'${projects.en}_img'}
                            width={300}
                            height={200}
                            />
                    </div>
                ))}
            </div>
        </main>
    );
}