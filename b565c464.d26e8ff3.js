(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{346:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return g}));var n=a(1),r=a(9),o=(a(0),a(458)),l=a(470),i=a(471),c=a(457),s=a(462),u=a(464),b={last_modified_on:"2023-04-23",$schema:"/.meta/.schemas/guides.json",title:"How to deploy a Rust REST API application on AWS with ease",description:"In this article, you will learn how to deploy a Rust REST API application on AWS with ease",author_github:"https://github.com/evoxmusic",tags:["type: tutorial","language: rust"],hide_pagination:!0},p={categories:[{name:"tutorial",title:"Tutorial",description:"Step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"How to deploy a Rust REST API application on AWS with ease",description:"In this article, you will learn how to deploy a Rust REST API application on AWS with ease",permalink:"/guides/tutorial/how-to-deploy-a-rust-rest-api-application-on-aws-with-ease",readingTime:"8 min read",source:"@site/guides/tutorial/how-to-deploy-a-rust-rest-api-application-on-aws-with-ease.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"language: rust",permalink:"/guides/tags/language-rust"}],title:"How to deploy a Rust REST API application on AWS with ease",truncated:!1,prevItem:{title:"How to deploy a full-stack application composed of Hasura, PostgreSQL and Angular",permalink:"/guides/tutorial/deploy-fullstack-application-composed-of-hasura-postgresql-angular"},nextItem:{title:"How to deploy Helm charts",permalink:"/guides/tutorial/how-to-deploy-helm-charts"}},m=[{value:"Create a Rust REST API app",id:"create-a-rust-rest-api-app",children:[]},{value:"Dockerized our Rust REST API app",id:"dockerized-our-rust-rest-api-app",children:[]},{value:"Deploy our Rust REST API app on AWS",id:"deploy-our-rust-rest-api-app-on-aws",children:[{value:"Sign up into Qovery",id:"sign-up-into-qovery",children:[]},{value:"Install Qovery CLI",id:"install-qovery-cli",children:[]},{value:"Sign up",id:"sign-up",children:[]},{value:"Connect your AWS account",id:"connect-your-aws-account",children:[]},{value:"Deploy our Rust REST API app",id:"deploy-our-rust-rest-api-app",children:[]}]},{value:"Wrapping up",id:"wrapping-up",children:[]},{value:"Useful resources",id:"useful-resources",children:[]}],d={rightToc:m};function g(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/rust-lang/www.rust-lang.org/issues/419#issuecomment-443418587"}),"Fast, reliable, productive - Pick three")," | Rust's slogan")),Object(o.b)("p",null,"Rust is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety."),Object(o.b)("p",null,"In this article, you will learn how to deploy a Rust API easily in a few steps. This article is separate into two parts:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a Rust REST API app"),Object(o.b)("li",{parentName:"ul"},"Dockerized our Rust REST API app"),Object(o.b)("li",{parentName:"ul"},"Deploy our Rust REST API app on AWS")),Object(o.b)(s.a,{mdxType:"Assumptions"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Rust installed on your system (instructions ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.rust-lang.org/learn/get-started"}),"here"),")"),Object(o.b)("li",{parentName:"ul"},"You have an AWS account"),Object(o.b)("li",{parentName:"ul"},"You have a GitHub account"))),Object(o.b)("p",null,"Let's go!"),Object(o.b)("h2",{id:"create-a-rust-rest-api-app"},"Create a Rust REST API app"),Object(o.b)(c.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"Check out the Rust REST API repo ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/evoxmusic/rust-prime-number-api"}),"here"),". You can fork it!")),Object(o.b)("p",null,"To illustrate the deployment of our Rust API application, we are going to create an API to know if a number is prime number. Let's create our Rust project using cargo"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:'title="create our rust project"',title:'"create',our:!0,rust:!0,'project"':!0}),"cargo new --bin rust-prime-number-api\n")),Object(o.b)("p",null,"Now you must have a ",Object(o.b)("inlineCode",{parentName:"p"},"rust-prime-number-api")," folder with 2 files:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Cargo.toml")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"src/main.rs"))),Object(o.b)("p",null,"To build our Rust REST API we are going to use Rocket - a web framework for Rust that makes it simple to write fast web application."),Object(o.b)("p",null,"Add the ",Object(o.b)("inlineCode",{parentName:"p"},"rocket")," and ",Object(o.b)("inlineCode",{parentName:"p"},"serde")," (JSON serializer/deserializer) dependencies to your ",Object(o.b)("inlineCode",{parentName:"p"},"Cargo.toml"),", then run ",Object(o.b)("inlineCode",{parentName:"p"},"cargo fetch")," (optional) to update your local dependencies."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml",metastring:'title="Cargo.toml" {9-12}',title:'"Cargo.toml"',"{9-12}":!0}),'[package]\nname = "rust-prime-number-api"\nversion = "0.1.0"\nauthors = ["Romaric Philogene <evoxmusic@gmail.com>"]\nedition = "2018"\n\n# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html\n\n[dependencies]\nrocket = { version = "0.5.0-rc.1", features = ["json"] }\nserde = { version = "1.0.130", features = ["derive"] }\nserde_json = "1.0.68"\n')),Object(o.b)("p",null,"Put inside your ",Object(o.b)("inlineCode",{parentName:"p"},"src/main.rs")," the following Rust code"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-rust",metastring:'title="src/main.rs"',title:'"src/main.rs"'}),'#[macro_use]\nextern crate rocket;\n\nuse rocket::serde::json::Json;\nuse serde::Serialize;\nuse std::time::SystemTime;\nuse std::net::{IpAddr, Ipv4Addr};\n\n#[derive(Serialize)]\nstruct NumberResponse {\n    number: u64,\n    is_prime_number: bool,\n    execution_time_in_micros: u128\n}\n\n#[get("/")]\nfn index() -> &\'static str {\n    "This is my Rust prime number REST API"\n}\n\n#[get("/isPrime?<number>")]\nfn get_is_prime(number: u64) -> Json<NumberResponse> {\n    let now = SystemTime::now();\n\n    Json(NumberResponse {\n        number,\n        is_prime_number: is_prime(number),\n        execution_time_in_micros: now.elapsed().unwrap().as_micros(),\n    })\n}\n\nfn is_prime(n: u64) -> bool {\n    if n <= 1 {\n        return false;\n    }\n\n    for a in 2..n {\n        if n % a == 0 {\n            return false;\n        }\n    }\n\n    true\n}\n\n#[rocket::main]\nasync fn main() {\n    let mut config = rocket::config::Config::default();\n    config.address = IpAddr::V4(Ipv4Addr::new(0, 0, 0, 0));\n\n    let _ = rocket::build()\n        .configure(config)\n        .mount("/", routes![index, get_is_prime])\n        .launch()\n        .await;\n}\n')),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"cargo run")," and you are supposed to get the following output"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"\ud83d\udd27 Configured for debug.\n   >> address: 0.0.0.0\n   >> port: 8000\n   >> workers: 16\n   >> ident: Rocket\n   >> keep-alive: 5s\n   >> limits: bytes = 8KiB, data-form = 2MiB, file = 1MiB, form = 32KiB, json = 1MiB, msgpack = 1MiB, string = 8KiB\n   >> tls: disabled\n   >> temp dir: /var/folders/td/bjr48yg96gd2xgd3s44fg40c0000gn/T/\n   >> log level: normal\n   >> cli colors: true\n   >> shutdown: ctrlc = true, force = true, signals = [SIGTERM], grace = 2s, mercy = 3s\n\ud83d\udef0  Routes:\n   >> (index) GET /\n   >> (get_is_prime) GET /isPrime?<number>\n\ud83d\udce1 Fairings:\n   >> Shield (liftoff, response, singleton)\n\ud83d\udee1\ufe0f Shield:\n   >> X-Frame-Options: SAMEORIGIN\n   >> Permissions-Policy: interest-cohort=()\n   >> X-Content-Type-Options: nosniff\n\ud83d\ude80 Rocket has launched from http://127.0.0.1:8000\n")),Object(o.b)("p",null,"You can try your Rust REST API by opening ",Object(o.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:8000/isPrime?number=9293029022983991")," in your browser."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "number": 9293029022983992,\n  "is_prime_number": false,\n  "execution_time_in_micros": 942894\n}\n')),Object(o.b)("p",null,"Let's now containerized our app with Docker to deploy it on our AWS account."),Object(o.b)("h2",{id:"dockerized-our-rust-rest-api-app"},"Dockerized our Rust REST API app"),Object(o.b)("p",null,"To run our Rust app we need to provide a valid Dockerfile. If you are not familiar with Docker, you can take a look to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/guides/tutorial/how-to-write-a-dockerfile/"}),"this article"),". Here is the content of our Dockerfile."),Object(o.b)(c.a,{type:"success",mdxType:"Alert"},Object(o.b)("p",null,"Our Dockerfile contains a multi-stage build. That is why we have two ",Object(o.b)("inlineCode",{parentName:"p"},"FROM")," instructions.\nOur final container image is optimized to be as light as possible.")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Dockerfile",metastring:'title="Dockerfile"',title:'"Dockerfile"'}),'####################################################################################################\n## Builder\n####################################################################################################\nFROM rust:latest AS builder\n\nRUN rustup target add x86_64-unknown-linux-musl\nRUN apt update && apt install -y musl-tools musl-dev\nRUN update-ca-certificates\n\n# Create appuser\nENV USER=app\nENV UID=10001\n\nRUN adduser \\\n    --disabled-password \\\n    --gecos "" \\\n    --home "/nonexistent" \\\n    --shell "/sbin/nologin" \\\n    --no-create-home \\\n    --uid "${UID}" \\\n    "${USER}"\n\nWORKDIR /app\n\nCOPY ./ .\n\nRUN cargo build --target x86_64-unknown-linux-musl --release\n\n####################################################################################################\n## Final image\n####################################################################################################\nFROM scratch\n\n# Import from builder.\nCOPY --from=builder /etc/passwd /etc/passwd\nCOPY --from=builder /etc/group /etc/group\n\nWORKDIR /app\n\n# Copy our build\nCOPY --from=builder /app/target/x86_64-unknown-linux-musl/release/rust-prime-number-api ./\n\n# Use an unprivileged user.\nUSER app:app\n\nCMD ["/app/rust-prime-number-api"]\n')),Object(o.b)("h2",{id:"deploy-our-rust-rest-api-app-on-aws"},"Deploy our Rust REST API app on AWS"),Object(o.b)("p",null,"To deploy our Rust app on AWS we are going to use Qovery. Qovery is the simplest way to deploy any app on AWS. It is the perfect candidate to deploy our Rust REST API in a few steps."),Object(o.b)("h3",{id:"sign-up-into-qovery"},"Sign up into Qovery"),Object(o.b)("p",null,"First, you need to sign up or sign in on Qovery."),Object(o.b)(l.a,{centered:!0,className:"rounded",defaultValue:"web",placeholder:"Select your interface",select:!1,size:null,values:[{group:"Interfaces",label:"Web",value:"web"},{group:"Interfaces",label:"CLI",value:"cli"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"web",mdxType:"TabItem"},Object(o.b)("li",null,Object(o.b)("p",null,"Sign in to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://start.qovery.com"}),"Qovery web interface"),"."),Object(o.b)("p",{align:"center"},Object(o.b)("a",{href:"https://onboarding.qovery.com/"},Object(o.b)("img",{src:"/img/Qovery_Sign_Up_Page.jpg",alt:"Qovery Sign-up page"}))))),Object(o.b)(i.a,{value:"cli",mdxType:"TabItem"},Object(o.b)("li",null,Object(o.b)("h3",{id:"install-qovery-cli"},"Install Qovery CLI"),Object(o.b)(l.a,{centered:!0,className:"rounded",defaultValue:"linux",placeholder:"Select your OS",select:!1,size:null,values:[{group:"Platforms",label:"Linux",value:"linux"},{group:"Platforms",label:"MacOS",value:"macos"},{group:"Platforms",label:"Windows",value:"windows"},{group:"Platforms",label:"Docker",value:"docker"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"linux",mdxType:"TabItem"},Object(o.b)(l.a,{centered:!0,className:"rounded",defaultValue:"universal",values:[{label:"*nix",value:"universal"},{label:"Arch Linux",value:"arch"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"universal",mdxType:"TabItem"},Object(o.b)("p",null,"To download and install Qovery CLI on any Linux distribution:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ curl -s https://get.qovery.com | bash\n"))),Object(o.b)(i.a,{value:"arch",mdxType:"TabItem"},Object(o.b)("p",null,"Qovery is part of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://aur.archlinux.org/packages"}),"AUR")," packages, so you can install it with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Jguer/yay"}),"yay"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ yay qovery-cli\n"))),Object(o.b)(i.a,{value:"manual",mdxType:"TabItem"},Object(o.b)("p",null,"Install the Qovery CLI on Linux manually by downloading the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest release"),", and uncompress its content to a folder into your shell ",Object(o.b)("inlineCode",{parentName:"p"},"PATH"),".")))),Object(o.b)(i.a,{value:"macos",mdxType:"TabItem"},Object(o.b)(l.a,{centered:!0,className:"rounded",defaultValue:"homebrew",values:[{label:"Homebrew",value:"homebrew"},{label:"Script",value:"script"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"homebrew",mdxType:"TabItem"},Object(o.b)("p",null,"The common solution to install a command line binary on the MacOS is to use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery brew repository\n$ brew tap Qovery/qovery-cli\n\n# Install the CLI\n$ brew install qovery-cli\n"))),Object(o.b)(i.a,{value:"script",mdxType:"TabItem"},Object(o.b)("p",null,"To download and install Qovery CLI from the command line:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ curl -s https://get.qovery.com | bash\n"))),Object(o.b)(i.a,{value:"manual",mdxType:"TabItem"},Object(o.b)("p",null,"Install the Qovery CLI on Mac OS manually by downloading the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest release"),", and uncompress its content to a folder into your shell ",Object(o.b)("inlineCode",{parentName:"p"},"PATH"),".")))),Object(o.b)(i.a,{value:"windows",mdxType:"TabItem"},Object(o.b)(l.a,{centered:!0,className:"rounded",defaultValue:"scoop",values:[{label:"Scoop",value:"scoop"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"scoop",mdxType:"TabItem"},Object(o.b)("p",null,"The classic way to install binaries on Windows is to use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://scoop.sh/"}),"Scoop"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery bucket\n$ scoop bucket add qovery https://github.com/Qovery/scoop-qovery-cli\n\n# Install the CLI\n$ scoop install qovery-cli\n"))),Object(o.b)(i.a,{value:"manual",mdxType:"TabItem"},Object(o.b)("p",null,"Install the Qovery CLI on Windows manually by downloading the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest release"),", and uncompress its content to\n",Object(o.b)("inlineCode",{parentName:"p"},"C:\\Windows"),".")))),Object(o.b)(i.a,{value:"docker",mdxType:"TabItem"},Object(o.b)("p",null,"Install Docker on your local machine and run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Pull and Run the latest Qovery CLI\n$ docker run ghcr.io/qovery/qovery-cli:latest help\n")),Object(o.b)("p",null,"Change ",Object(o.b)("inlineCode",{parentName:"p"},"latest")," by the version you want to use. For example, to use the version 0.58.4, run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ docker run ghcr.io/qovery/qovery-cli:0.58.4 help\n")),Object(o.b)("p",null,"Note: ",Object(o.b)("inlineCode",{parentName:"p"},"ghcr.io")," is the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/pkgs/container/qovery-cli"}),"GitHub Container Registry"),".")))),Object(o.b)("li",null,Object(o.b)("h3",{id:"sign-up"},"Sign up"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth\n")),Object(o.b)(c.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"If you are using an environment without access to GUI or a browser, you can use headless authentication instead:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth --headless\n"))),Object(o.b)("p",null,"Your browser window with sign-in options will open."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"})),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apps/qovery/installations/new"}),"Click here")," to authorize Qovery to clone and build your applications."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/github_signup.svg",alt:"Connect Github"})),Object(o.b)("p",null,"Congratulations, you are logged-in.")))),Object(o.b)("h3",{id:"connect-your-aws-account"},"Connect your AWS account"),Object(o.b)("p",null,"To connect your AWS account check out ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/guides/tutorial/how-to-deploy-your-application-on-aws-in-30-minutes/"}),"this guide"),"."),Object(o.b)(c.a,{type:"success",mdxType:"Alert"},Object(o.b)("p",null,"Qovery installation on your AWS account takes up to 30 minutes. You will be notified by email when it is over.")),Object(o.b)("h3",{id:"deploy-our-rust-rest-api-app"},"Deploy our Rust REST API app"),Object(o.b)("p",null,"Once your AWS account is set-up, you can deploy your Rust app by.."),Object(o.b)("p",null,"Creating a project ",Object(o.b)("inlineCode",{parentName:"p"},"prime number"),"."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/rust_prime_number_project.png",alt:"Create a project"})),Object(o.b)("p",null,"Creating an environment ",Object(o.b)("inlineCode",{parentName:"p"},"prod"),"."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/rust_prime_number_environment.png",alt:"Create an environment"})),Object(o.b)("p",null,"Creating an app by selecting your Rust app repository, build mode > ",Object(o.b)("strong",{parentName:"p"},"Dockerfile"),", and the port ",Object(o.b)("strong",{parentName:"p"},"8000"),"."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/rust_prime_number_app.png",alt:"Create an app"})),Object(o.b)("p",null,"And deploy! That's it \ud83d\udd25... nothing more. Our Rust REST API app is ready"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/rust_prime_number_app_deployed.png",alt:"Our app is deployed"})),Object(o.b)("p",null,"Check out this video to see how I quickly deploy my Rust REST API with Qovery."),Object(o.b)("div",{class:"video-container"},Object(o.b)("p",{align:"center"},Object(o.b)("iframe",{src:"https://www.loom.com/embed/7ae48d3383da40159d8aa97c23aadb3e",width:"100%",height:"100%",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))),Object(o.b)("p",null,"Watch this video showing the final result \ud83d\udc47"),Object(o.b)("div",{class:"video-container"},Object(o.b)("p",{align:"center"},Object(o.b)("iframe",{src:"https://www.loom.com/embed/30cc34ef166a4fdaaeb0a9e864bf7836",width:"100%",height:"100%",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))),Object(o.b)("h2",{id:"wrapping-up"},"Wrapping up"),Object(o.b)("p",null,"Rust combined to Rocket web framework turns building REST API super easy. Deploying your Rust app on AWS with Qovery is as simple as selecting your GitHub repository. Nothing more. Hope you liked it."),Object(o.b)("h2",{id:"useful-resources"},"Useful resources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/evoxmusic/rust-prime-number-api"}),"Source code")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://rocket.rs"}),"Rocket framework")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://doc.rust-lang.org/book/"}),"The Rust programming language book")," (Free)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://circleci.com/blog/rust-cd/"}),"Rust Circle CI"))),Object(o.b)(u.a,{to:"/guides/tutorial/",mdxType:"Jump"},"Tutorial"))}g.isMDXComponent=!0},457:function(e,t,a){"use strict";a(459);var n=a(0),r=a.n(n),o=a(456),l=a.n(o);a(132);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,o=e.icon,i=e.type,c=null;switch(i){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return r.a.createElement("div",{className:l()(a,"alert","alert--"+i,{"alert--fill":n,"alert--icon":!1!==o}),role:"alert"},!1!==o&&r.a.createElement("i",{className:l()("feather","icon-"+(o||c))}),t)}},460:function(e,t,a){var n=a(26).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||a(10)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},461:function(e,t,a){"use strict";var n=a(1),r=a(0),o=a.n(r),l=a(39),i=a(465),c=a(20),s=a.n(c);t.a=function(e){var t,a=e.to,c=e.href,u=a||c,b=Object(i.a)(u),p=Object(r.useRef)(!1),m=s.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!m&&b&&window.docusaurus.prefetch(u),function(){m&&t&&t.disconnect()}}),[u,m,b]),u&&b?o.a.createElement(l.b,Object(n.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(u),p.current=!0)},innerRef:function(e){var a,n;m&&e&&b&&(a=e,n=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:u})):o.a.createElement("a",Object(n.a)({},e,{href:u}))}},462:function(e,t,a){"use strict";a(460);var n=a(0),r=a.n(n),o=a(457);t.a=function(e){var t=e.children,a=e.name;return r.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},464:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(461),l=a(456),i=a.n(l);a(133);t.a=function(e){var t=e.children,a=e.className,n=e.badge,l=e.leftIcon,c=e.rightIcon,s=e.size,u=e.target,b=e.to,p=i()("jump-to","jump-to--"+s,a),m=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},l&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+l})),r.a.createElement("div",{className:"jump-to--main"},n?r.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return u?r.a.createElement("a",{href:b,target:u,className:p},m):r.a.createElement(o.a,{to:b,className:p},m)}},465:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}a.d(t,"a",(function(){return n}))},470:function(e,t,a){"use strict";var n=a(1),r=(a(473),a(472),a(52),a(29),a(22),a(21),a(0)),o=a.n(r),l=a(476),i=a(456),c=a.n(i),s=a(466),u=a.n(s),b=a(475),p=37,m=39;function d(e){var t=e.block,a=e.centered,n=e.changeSelectedValue,r=e.className,l=e.handleKeydown,i=e.style,s=e.values,u=e.selectedValue,b=e.tabRefs;return o.a.createElement("div",{className:a?"tabs--centered":null},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",r,{"tabs--block":t}),style:i},s.map((function(e){var t=e.value,a=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===t,className:c()("tab-item",{"tab-item--active":u===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:function(e){return l(b,e.target,e)},onFocus:function(){return n(t)},onClick:function(){return n(t)}},a)}))))}function g(e){var t=e.placeholder,a=e.selectedValue,n=e.changeSelectedValue,r=e.size,i=e.values,c=i;if(c[0].group){var s=_.groupBy(c,"group");c=Object.keys(s).map((function(e){return{label:e,options:s[e]}}))}return o.a.createElement(l.a,{className:"react-select-container react-select--"+r,classNamePrefix:"react-select",options:c,isClearable:a,placeholder:t,value:i.find((function(e){return e.value==a})),onChange:function(e){return n(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,a=e.defaultValue,l=e.groupId,i=e.label,c=e.placeholder,s=e.select,h=e.size,O=(e.style,e.values),j=e.urlKey,y=Object(b.a)(),f=y.tabGroupChoices,v=y.setTabGroupChoices,w=Object(r.useState)(a),N=w[0],R=w[1];if(null!=l){var T=f[l];null!=T&&T!==N&&R(T)}var I=function(e){R(e),null!=l&&v(l,e)},k=[],S=function(e,t,a){switch(a.keyCode){case m:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}};return Object(r.useEffect)((function(){if("undefined"!=typeof window&&window.location&&j){var e=u.a.parse(window.location.search);e[j]&&R(e[j])}}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"margin-bottom--"+(h||"md")},i&&o.a.createElement("div",{className:"margin-vert--sm"},i),O.length>1&&(s?o.a.createElement(g,Object(n.a)({changeSelectedValue:I,handleKeydown:S,placeholder:c,selectedValue:N,size:h,tabRefs:k},e)):o.a.createElement(d,Object(n.a)({changeSelectedValue:I,handleKeydown:S,selectedValue:N,tabRefs:k},e)))),r.Children.toArray(t).filter((function(e){return e.props.value===N}))[0])}},471:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement(r.a.Fragment,null,e.children)}}}]);