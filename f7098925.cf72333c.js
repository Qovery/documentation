(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{345:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return h})),n.d(t,"default",(function(){return g}));var a=n(1),r=n(9),o=(n(0),n(359)),i=n(358),l=n(364),s=n(368),c=n(371),b=n(372),u=n(363),p={last_modified_on:"2021-08-29",$schema:"/.meta/.schemas/guides.json",title:"URL Shortener API with Kotlin (Part 1/2)",description:"Create a URL shortener API with Kotlin, the micro-framework Ktor and PostgreSQL",author_github:"https://github.com/evoxmusic",tags:["type: tutorial","language: kotlin","database: postgresql"],hide_pagination:!0},d={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"URL Shortener API with Kotlin (Part 1/2)",description:"Create a URL shortener API with Kotlin, the micro-framework Ktor and PostgreSQL",permalink:"/guides/tutorial/url-shortener-api-with-kotlin",readingTime:"13 min read",source:"@site/guides/tutorial/url-shortener-api-with-kotlin.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"language: kotlin",permalink:"/guides/tags/language-kotlin"},{label:"database: postgresql",permalink:"/guides/tags/database-postgresql"}],title:"URL Shortener API with Kotlin (Part 1/2)",truncated:!1,prevItem:{title:"Terraform is Not the Golden Hammer",permalink:"/guides/engineering/terraform-not-the-golden-hammer"},nextItem:{title:"Zero to Hero - How to deploy your apps on AWS in 30 minutes",permalink:"/guides/tutorial/how-to-deploy-your-application-on-aws-in-30-minutes"}},h=[{value:"Introduction",id:"introduction",children:[]},{value:"What is a URL shortener?",id:"what-is-a-url-shortener",children:[]},{value:"Ktor principles",id:"ktor-principles",children:[{value:"Kotlin",id:"kotlin",children:[]},{value:"Functional programming",id:"functional-programming",children:[]},{value:"Asynchronous",id:"asynchronous",children:[]}]},{value:"HTTP Server",id:"http-server",children:[]},{value:"URL Encoder",id:"url-encoder",children:[{value:"Handle identifier collision",id:"handle-identifier-collision",children:[]}]},{value:"URL Decoder",id:"url-decoder",children:[]},{value:"Redirect",id:"redirect",children:[]},{value:"Stats: clicks over time",id:"stats-clicks-over-time",children:[]},{value:"Try the API",id:"try-the-api",children:[]},{value:"Connect to a PostgreSQL database with Exposed",id:"connect-to-a-postgresql-database-with-exposed",children:[]},{value:"Deploy in the Cloud with Qovery",id:"deploy-in-the-cloud-with-qovery",children:[{value:"Install Qovery CLI",id:"install-qovery-cli",children:[]},{value:"Sign up",id:"sign-up",children:[]},{value:"Create an application",id:"create-an-application",children:[]},{value:"Create a new project",id:"create-a-new-project",children:[]},{value:"Create a new environment",id:"create-a-new-environment",children:[]},{value:"Create a new application",id:"create-a-new-application",children:[]},{value:"Deploy a database",id:"deploy-a-database",children:[]},{value:"Connect to PostgreSQL",id:"connect-to-postgresql",children:[]},{value:"Deploy",id:"deploy",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],m={rightToc:h};function g(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The source code for this post can be found on this ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/evoxmusic/ktor-url-shortener"}),"github repo")),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://ktor.io/"}),"Ktor")," is a brand new micro-framework created by the Jetbrains team, and running over the JVM. Jetbrains are the authors of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://kotlinlang.org/"}),"Kotlin")," - which is now the official programming language for Android, and one of the most popular programming language on the JVM. Kotlin is gaining popularity on server-side and multi-platform application development."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Ktor is a framework for building asynchronous servers and clients in connected systems using the powerful Kotlin programming language.")),Object(o.b)("p",null,"In this article, you will learn:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"How to design a simple URL shortener."),Object(o.b)("li",{parentName:"ul"},"How to use the Ktor micro-framework with Kotlin"),Object(o.b)("li",{parentName:"ul"},"How to deploy a Ktor application")),Object(o.b)("p",null,"I have +4 years of experience using Spring, and I wanted to give a try to Ktor, which seems promising. Creating a URL shortener is an excellent way to start."),Object(o.b)("h2",{id:"what-is-a-url-shortener"},"What is a URL shortener?"),Object(o.b)("p",null,"A URL shortener is a simple tool that takes a long URL and turns it into a very short one"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://uploads-ssl.webflow.com/5de176c0d41c9b4a1dbbb0aa/5e655859bc2ae5c7371efa36_urlshortener%20image.png",alt:"Flow of URL shortening - from original URL to short URL"}))),Object(o.b)("p",null,"It is commonly used for 3 reasons:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Tracking clicks"),Object(o.b)("li",{parentName:"ul"},"Make URL much more concise."),Object(o.b)("li",{parentName:"ul"},"Hide original URL")),Object(o.b)("p",null,"One famous freemium provider is bit.ly (see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://uploads-ssl.webflow.com/5de176c0d41c9b4a1dbbb0aa/5e655a34bc2ae5452b1f124b_bitly.gif"}),"here"),")"),Object(o.b)("p",null,"In this article we will make a basic bit.ly like URL shortener. Let\u2019s go"),Object(o.b)("h2",{id:"ktor-principles"},"Ktor principles"),Object(o.b)("p",null,"Before starting I want to introduce the 3 main principles of Ktor."),Object(o.b)("h3",{id:"kotlin"},"Kotlin"),Object(o.b)("p",null,"Kotlin is the language used to develop on Ktor. It is an object-oriented and functional language. It is very stable and runs on the JVM. Kotlin is 100% interoperable with Java and allows you to benefit from its ecosystem (libraries, build system, etc.)."),Object(o.b)("h3",{id:"functional-programming"},"Functional programming"),Object(o.b)("p",null,"Ktor leverages the power of Kotlin and has a very functional approach. When writing code, everything seems obvious. It's very similar to what you can see on NodeJS. For me, coming from the Spring world, I find it very efficient to read and use."),Object(o.b)("h3",{id:"asynchronous"},"Asynchronous"),Object(o.b)("p",null,"Kotlin provides asynchronous code execution, thanks to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://kotlinlang.org/docs/reference/coroutines-overview.html"}),"coroutines"),". Ktor exploits this feature to its full potential, and even if you have the impression that you are writing code in a blocking manner, this is not the case. Ktor makes your life easier."),Object(o.b)("h2",{id:"http-server"},"HTTP Server"),Object(o.b)("p",null,"Here is a complete and simple example of how to expose an HTTP server (",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:8080"}),"http://localhost:8080"),") with Ktor."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'fun main(args: Array<String>): Unit = io.ktor.server.netty.EngineMain.main(args)\n\n@kotlin.jvm.JvmOverloads\nfun Application.module(testing: Boolean = false) {\n    routing {\n        get("/") {\n            call.respondText("Hello World", contentType = ContentType.Text.Plain)\n        }\n    }\n}\n')),Object(o.b)("h2",{id:"url-encoder"},"URL Encoder"),Object(o.b)("p",null,"The URL encoder will translate an incoming address into a smaller URL. The idea is to provide an ID that will identify the final URL. Using a hash function is perfect for this operation. However, the operation is non-reversible, meaning you can\u2019t retrieve the final URL by the generated identifier."),Object(o.b)("p",null,"Function to transform a long URL into a shorter URL"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'// String extension\nfun String.encodeToID(): String {\n    // hash String with MD5\n    val hashBytes = MessageDigest.getInstance("MD5").digest(this.toByteArray(Charsets.UTF_8))\n    // transform to human readable MD5 String\n    val hashString = String.format("%032x", BigInteger(1, hashBytes))\n    // truncate MD5 String\n    val truncatedHashString = hashString.take(6)\n    // return id\n    return truncatedHashString\n}\n')),Object(o.b)("p",null,"We expose the function through the REST API"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'// Request object\ndata class Request(val url: String) {\n    fun toResponse(): Response = Response(url, url.encodeToID())\n}\n\n// Response object\ndata class Response(val originalURL: String, private val id: String) {\n    val shortURL: String = "http://localhost:8080/$id"\n}\n\n@kotlin.jvm.JvmOverloads\nfun Application.module(testing: Boolean = false) {\n    install(ContentNegotiation) {\n        jackson {\n            enable(SerializationFeature.INDENT_OUTPUT)\n            propertyNamingStrategy = PropertyNamingStrategy.SNAKE_CASE\n        }\n    }\n\n    // Hash Table Response object by ID\n    val responseByID = mutableMapOf<String, Response>()\n\n    routing {\n        post("/api/v1/encode") {\n            // Deserialize JSON body to Request object\n            val request = call.receive<Request>()\n\n            // find the Response object if it already exists\n            val retrievedResponse = responseByID[request.url.encodeToID()]\n            if (retrievedResponse != null) {\n                // cache hit\n                log.debug("cache hit $retrievedResponse")\n                return@post call.respond(retrievedResponse)\n            }\n\n            // cache miss\n            val response = request.toResponse()\n            responseByID[request.url.encodeToID()] = response\n            log.debug("cache miss $response")\n\n            // Serialize Response object to JSON body\n            call.respond(response)\n        }\n    }\n}\n')),Object(o.b)("h3",{id:"handle-identifier-collision"},"Handle identifier collision"),Object(o.b)("p",null,"Using a hash function makes no guarantee that it is not already being used. If it is in use, then you need to change it to another one. Note: even if the probability to have a collision is very low, you should handle this case."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'// String extension (function signature has changed)\nfun String.encodeToID(truncateLength: Int = 6): String {\n    // hash String with MD5\n    val hashBytes = MessageDigest.getInstance("MD5").digest(this.toByteArray(Charsets.UTF_8))\n    // transform to human readable MD5 String\n    val hashString = String.format("%032x", BigInteger(1, hashBytes))\n    // truncate MD5 String\n    val truncatedHashString = hashString.take(truncateLength)\n    // return id\n    return truncatedHashString\n}\n\n//...\n\n@kotlin.jvm.JvmOverloads\nfun Application.module(testing: Boolean = false) {\n        // ...\n    // Hash Table Response object by id\n    val responseByID = mutableMapOf<String, Response>()\n\n    fun getIdentifier(url: String, truncateLength: Int = 6): String {\n        val id = url.encodeToID()\n\n        val retrievedResponse = responseByID[id]\n        if (retrievedResponse?.originalURL != url) {\n            // collision spotted !\n            return getIdentifier(url, truncateLength + 1)\n        }\n\n        return id\n    }\n\n    routing {\n        post("/api/v1/encode") {\n            // Deserialize JSON body to Request object\n            val request = call.receive<Request>()\n\n            // find the Response object if it already exists\n            val id = getID(request.url)\n            val retrievedResponse = responseByID[id]\n            if (retrievedResponse != null) {\n                // cache hit\n                log.debug("cache hit $retrievedResponse")\n                return@post call.respond(retrievedResponse)\n            }\n\n            // cache miss\n            val response = request.toResponse()\n            responseByID[id] = response\n            log.debug("cache miss $response")\n\n            // Serialize Response object to JSON body\n            call.respond(response)\n        }\n    }\n}\n')),Object(o.b)("h2",{id:"url-decoder"},"URL Decoder"),Object(o.b)("p",null,"Decoding the URL is the process of returning the original URL from the short URL. This is the reverse operation made by the URL Encoder"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),"val shortURL = getShortURL(request.url)\nval retrievedResponse = responseByID[shortURL]\nretrievedResponse?.originalURL // return original URL or null\n")),Object(o.b)("h2",{id:"redirect"},"Redirect"),Object(o.b)("p",null,"When a user clicks on a short URL, the user is redirected to the final URL. HTTP protocol allows to do this naturally by returning a 302 status code and a redirection URL."),Object(o.b)("p",null,"With Ktor the redirection is as simple as calling a method with the final URL as a parameter."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'call.respondRedirect("https://www.qovery.com")\n')),Object(o.b)("p",null,"What we expect is that when the user visits ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:8080/fbc951"}),"http://localhost:8080/fbc951")," he is redirected to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.qovery.com"}),"https://www.qovery.com"),". If the URL is incorrect then redirect to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.google.com"}),"https://www.google.com")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'@kotlin.jvm.JvmOverloads\nfun Application.module(testing: Boolean = false) {\n        // ...\n    routing {\n        get("/{id}") {\n            val id = call.parameters["id"]\n            val retrievedResponse = id?.let { responseByID[it] }\n\n            if (id.isNullOrBlank() || retrievedResponse == null) {\n                return@get call.respondRedirect("https://www.google.com")\n            }\n\n            log.debug("redirect to: $retrievedResponse")\n            call.respondRedirect(retrievedResponse.originalURL)\n        }\n        // ...\n    }\n}\n')),Object(o.b)("h2",{id:"stats-clicks-over-time"},"Stats: clicks over time"),Object(o.b)("p",null,"Something that is really useful on products like bit.ly is the stats provided (click over time, referrers, country of visitors). Here is how to store click over time and make them available through the API"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'// added\ndata class Stat(val clicksOverTime: MutableList<Date> = mutableListOf())\n\n// Response object (modified with Stat)\ndata class Response(val originalURL: String, private val id: String, val stat: Stat = Stat()) {\n    val shortURL: String = "http://localhost:8080/$id"\n}\n\n@kotlin.jvm.JvmOverloads\nfun Application.module(testing: Boolean = false) {\n        install(ContentNegotiation) {\n        jackson {\n            // ...\n            // add this line to return Date object as ISO8601 format\n            disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS)\n        }\n    }\n        // ...\n    routing {\n            // ...\n        get("/api/v1/url/{id}/stat") {\n            val id = call.parameters["id"]\n            val retrievedResponse = id?.let { responseByID[it] }\n\n            if (id.isNullOrBlank() || retrievedResponse == null) {\n                return@get call.respond(HttpStatusCode.NoContent)\n            }\n\n            call.respond(retrievedResponse.stat)\n        }\n        // ...\n    }\n}\n')),Object(o.b)("h2",{id:"try-the-api"},"Try the API"),Object(o.b)("p",null,"Run the application"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ ./gradlew run\n//...\n2020-03-12 09:28:08.150 [main] INFO  Application - No ktor.deployment.watch patterns specified, automatic reload is not active\n2020-03-12 09:28:08.606 [main] INFO  Application - Responding at http://0.0.0.0:8080\n")),Object(o.b)("p",null,"Then execute the commands"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# generate a short URL\n$ curl -X POST -d \'{"url": "https://www.qovery.com"}\' -H "Content-type: application/json" "http://localhost:8080/api/v1/encode"\n{\n  "original_url": "https://www.qovery.com",\n  "stat": {\n    "clicks_over_time": []\n  },\n  "short_url": "http://localhost:8080/fbc951"\n}\n\n# generate 4 fake clicks\n$ curl -X GET \'http://localhost:8080/fbc951\'\n$ curl -X GET \'http://localhost:8080/fbc951\'\n$ curl -X GET \'http://localhost:8080/fbc951\'\n$ curl -X GET \'http://localhost:8080/fbc951\'\n\n# show stat\n$ curl -X GET \'http://localhost:8080/api/v1/url/fbc951/stat\'\n{\n  "clicks_over_time": [\n    "2020-03-11T21:10:52.354+0000",\n    "2020-03-11T21:10:54.093+0000",\n    "2020-03-11T21:12:34.987+0000",\n    "2020-03-11T21:12:37.223+0000"\n  ]\n}\n')),Object(o.b)("h2",{id:"connect-to-a-postgresql-database-with-exposed"},"Connect to a PostgreSQL database with Exposed"),Object(o.b)("p",null,"By storing the data in memory, we lose all the data every time the application restart. Which is problematic for running in production. To make the data persistent we will store it in a PostgreSQL database. We will have to add 1 new dependency - ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/JetBrains/Exposed"}),"Exposed"),". Exposed (with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/brettwooldridge/HikariCP"}),"Hikari Connection Pool"),") is a lightweight SQL library on top of JDBC driver for Kotlin. With exposed it is possible to access databases in two flavours: typesafe SQL wrapping DSL and lightweight Data Access Objects (DAO)."),Object(o.b)("p",null,"Add the dependencies to your build.gradle (or POM.xml)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'repositories {\n  jcenter()\n}\n\ndependencies {\n  // Connection Pool and PostgreSQL driver\n  implementation("com.zaxxer:HikariCP:3.4.2")\n  implementation("org.postgresql:postgresql:42.2.11")\n\n  // Exposed\n  implementation("org.jetbrains.exposed:exposed-core:0.22.1")\n  implementation("org.jetbrains.exposed:exposed-dao:0.22.1")\n  implementation("org.jetbrains.exposed:exposed-jdbc:0.22.1")\n  implementation("org.jetbrains.exposed:exposed-java-time:0.22.1")\n}\n')),Object(o.b)("p",null,"We need to have 2 distincts tables, one containing all the final URLs with their correspond identifier"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'object ResponseTable : Table("response") {\n    val id = varchar("id", 32)\n    val originalURL = varchar("original_url", 2048)\n    override val primaryKey: PrimaryKey = PrimaryKey(id)\n}\n')),Object(o.b)("p",null,"And a second one with all the clicking points"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'object ClickOverTimeTable : Table("click_over_time") {\n    val id = integer("id").autoIncrement()\n    val clickDate = datetime("click_date")\n    val response = reference("response_id", onDelete = ReferenceOption.CASCADE, refColumn = ResponseTable.id)\n    override val primaryKey: PrimaryKey = PrimaryKey(id)\n}\n')),Object(o.b)("p",null,"We need to create the tables as defined above programmatically"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'fun initDatabase() {\n    val config = HikariConfig().apply {\n        jdbcUrl = "jdbc:postgresql://127.0.0.1:5432/exposed"\n        username = "exposed"\n        password = "exposed"\n        driverClassName = "org.postgresql.Driver"\n    }\n\n    Database.connect(HikariDataSource(config))\n\n    transaction {\n        // create tables if they do not exist\n        SchemaUtils.createMissingTablesAndColumns(RequestTable, ClickOverTimeTable)\n    }\n}\n\n@kotlin.jvm.JvmOverloads\nfun Application.module(testing: Boolean = false) {\n    initDatabase()\n    // ...\n}\n')),Object(o.b)("p",null,"We have to replace the Hash Table used to store the data by the PostgreSQL database (see the final code ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/evoxmusic/ktor-url-shortener/blob/with_postgresql/src/Application.kt"}),"here"),")"),Object(o.b)("h2",{id:"deploy-in-the-cloud-with-qovery"},"Deploy in the Cloud with Qovery"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.qovery.com"}),"Qovery")," is going to help us to deploy the final application in the Cloud without the need to configure the CI/CD, network, security, load balancing, database and all the DevOps tasks"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Qovery is a deployment platform that helps all developers to deploy their applications in the Cloud in just a few seconds")),Object(o.b)(u.a,{name:"tutorial",mdxType:"Assumptions"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Your code need to be hosted on Github/Gitlab"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://ktor.io/quickstart/quickstart/docker.html"}),"Package your Ktor application to build and run it on Docker")))),Object(o.b)(c.a,{centered:!0,className:"rounded",defaultValue:"web",placeholder:"Select your interface",select:!1,size:null,values:[{group:"Interfaces",label:"Web",value:"web"},{group:"Interfaces",label:"CLI",value:"cli"}],mdxType:"Tabs"},Object(o.b)(b.a,{value:"web",mdxType:"TabItem"},Object(o.b)("li",null,Object(o.b)("p",null,"Sign in to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://start.qovery.com"}),"Qovery web interface"),"."),Object(o.b)("p",{align:"center"},Object(o.b)("a",{href:"https://start.qovery.com"},Object(o.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"}))))),Object(o.b)(b.a,{value:"cli",mdxType:"TabItem"},Object(o.b)("li",null,Object(o.b)("h3",{id:"install-qovery-cli"},"Install Qovery CLI"),Object(o.b)(c.a,{centered:!0,className:"rounded",defaultValue:"linux",placeholder:"Select your OS",select:!1,size:null,values:[{group:"Platforms",label:"Linux",value:"linux"},{group:"Platforms",label:"MacOS",value:"macos"},{group:"Platforms",label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(o.b)(b.a,{value:"linux",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Download and install Qovery CLI on every Linux distribution\n$ curl -s https://get.qovery.com | sudo bash\n"))),Object(o.b)(b.a,{value:"macos",mdxType:"TabItem"},Object(o.b)(c.a,{centered:!0,className:"rounded",defaultValue:"homebrew",values:[{label:"Homebrew",value:"homebrew"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(o.b)(b.a,{value:"homebrew",mdxType:"TabItem"},Object(o.b)("p",null,"The common solution to install a command line binary on the MacOS is to use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery brew repository\n$ brew tap Qovery/qovery-cli\n\n# Install the CLI\n$ brew install qovery-cli\n"))),Object(o.b)(b.a,{value:"manual",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Install the Qovery CLI on MacOS manually\n$ curl -s https://get.qovery.com | bash\n"))))),Object(o.b)(b.a,{value:"windows",mdxType:"TabItem"},Object(o.b)(c.a,{centered:!0,className:"rounded",defaultValue:"scoop",values:[{label:"Scoop",value:"scoop"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(o.b)(b.a,{value:"scoop",mdxType:"TabItem"},Object(o.b)("p",null,"The classic way to install binaries on Windows is to use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://scoop.sh/"}),"Scoop"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery bucket\n$ scoop bucket add qovery https://github.com/Qovery/scoop-qovery-cli\n\n# Install the CLI\n$ scoop install qovery-cli\n"))),Object(o.b)(b.a,{value:"manual",mdxType:"TabItem"},Object(o.b)("p",null,"Install the Qovery CLI on Windows manually by downloading the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest realease"),", and uncompress its content to\n",Object(o.b)("inlineCode",{parentName:"p"},"C:\\Windows"),".")))))),Object(o.b)("li",null,Object(o.b)("h3",{id:"sign-up"},"Sign up"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth\n")),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"If you are using an environment without access to GUI or a browser, you can use headless authentication instead:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth --headless\n"))),Object(o.b)("p",null,"Your browser window with sign-in options will open."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"})),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/apps/qovery/installations/new"}),"Click here")," to authorize Qovery to clone and build your applications."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/github_signup.svg",alt:"Connect Github"})),Object(o.b)("p",null,"Congratulations, you are logged-in.")))),Object(o.b)("h3",{id:"create-an-application"},"Create an application"),Object(o.b)(s.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",null,Object(o.b)("h3",{id:"create-a-new-project"},"Create a new project"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/heroku/heroku-2.png",alt:"Migrate from Heroku"}))),Object(o.b)("li",null,Object(o.b)("h3",{id:"create-a-new-environment"},"Create a new environment"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/heroku/heroku-3.png",alt:"Migrate from Heroku"}))),Object(o.b)("li",null,Object(o.b)("h3",{id:"create-a-new-application"},"Create a new application"),Object(o.b)("p",null,"To follow the guide, ",Object(o.b)("a",{href:"https://github.com/evoxmusic/ktor-url-shortener.git"},"you can fork and use our repository")),Object(o.b)("p",null,"Use the forked repository (and branch ",Object(o.b)("strong",{parentName:"p"},"master"),") while creating the application in the repository field:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/rust/rust.png",alt:"Migrate from Heroku"}))),Object(o.b)("li",null,Object(o.b)("p",null,"After the application is created: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Navigate application settings"),Object(o.b)("li",{parentName:"ul"},"Select ",Object(o.b)("strong",{parentName:"li"},"Port")),Object(o.b)("li",{parentName:"ul"},"Add port 8080")),Object(o.b)("p",{align:"left"},Object(o.b)("img",{src:"/img/micro/micros-1.png",alt:"Microservices"})),Object(o.b)("p",null,"This will expose your application and make accessible in the public internet.")))),Object(o.b)("h3",{id:"deploy-a-database"},"Deploy a database"),Object(o.b)("p",null,"Create and deploy a new database."),Object(o.b)(i.a,{type:"warning",mdxType:"Alert"},"Name the new database **my-pql-db** to follow the guide flawlessly"),Object(o.b)("p",null,"To learn how to do it, you can ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/getting-started/create-a-database/"}),"follow this guide"),"."),Object(o.b)("h3",{id:"connect-to-postgresql"},"Connect to PostgreSQL"),Object(o.b)("p",null,"Qovery add dynamically all required environment variables to connect to the database at the runtime of the container."),Object(o.b)("p",null,"You can list them all in ",Object(o.b)("strong",{parentName:"p"},"Environment Variables")," ",Object(o.b)("strong",{parentName:"p"},"Secrets")," section in your application overview, as described in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/getting-started/managing-environment-variables/"}),"envs guide"),"."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/db-envs.png",alt:"DB Secrets"})),Object(o.b)("p",null,"To use them:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'fun initDatabase() {\n    val config = HikariConfig().apply {\n        jdbcUrl = "jdbc:${System.getenv("QOVERY_DATABASE_MY_PQL_DB_CONNECTION_URI_WITHOUT_CREDENTIALS")}"\n        username = System.getenv("QOVERY_DATABASE_MY_PQL_DB_USERNAME")\n        password = System.getenv("QOVERY_DATABASE_MY_PQL_DB_PASSWORD")\n        driverClassName = "org.postgresql.Driver"\n    }\n\n    Database.connect(HikariDataSource(config))\n\n    transaction {\n        // create tables if they do not exist\n        SchemaUtils.createMissingTablesAndColumns(RequestTable, ClickOverTimeTable)\n    }\n}\n')),Object(o.b)("h3",{id:"deploy"},"Deploy"),Object(o.b)("p",null,"To deploy your application and database, click ",Object(o.b)("strong",{parentName:"p"},"Action")," and ",Object(o.b)("strong",{parentName:"p"},"Deploy")," button in your environments list view:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/deploy-env.png",alt:"Kotlin URL Shortener"})),Object(o.b)("p",null,"To get public URL to the application, open application details and click on ",Object(o.b)("strong",{parentName:"p"},"Action")," ",Object(o.b)("strong",{parentName:"p"},"Open"),"."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/deploy-env-1.png",alt:"Kotlin URL Shortener"})),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/open-app.png",alt:"Kotlin URL Shortener"})),Object(o.b)("h2",{id:"conclusion"},"Conclusion"),Object(o.b)("p",null,"We have seen that creating an URL shortener API with Ktor and Kotlin is extremely simple. Connecting the application to PostgreSQL is very easy with the Exposed library. In just a few lines of code, the service is fully functional and can be deployed in production very quickly with the help of Qovery. In the next part, we will see how to create a web interface connecting to this API to convert our URLs without using the curl command."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Part 2"),": bind a web interface to the API - ","[link coming soon]"),Object(o.b)(l.a,{to:"/guides/tutorial/",mdxType:"Jump"},"Tutorial"))}g.isMDXComponent=!0},358:function(e,t,n){"use strict";n(362);var a=n(0),r=n.n(a),o=n(357),i=n.n(o);n(131);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,o=e.icon,l=e.type,s=null;switch(l){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return r.a.createElement("div",{className:i()(n,"alert","alert--"+l,{"alert--fill":a,"alert--icon":!1!==o}),role:"alert"},!1!==o&&r.a.createElement("i",{className:i()("feather","icon-"+(o||s))}),t)}},360:function(e,t,n){"use strict";var a=n(1),r=n(0),o=n.n(r),i=n(39),l=n(365),s=n(19),c=n.n(s);t.a=function(e){var t,n=e.to,s=e.href,b=n||s,u=Object(l.a)(b),p=Object(r.useRef)(!1),d=c.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!d&&u&&window.docusaurus.prefetch(b),function(){d&&t&&t.disconnect()}}),[b,d,u]),b&&u?o.a.createElement(i.b,Object(a.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(b),p.current=!0)},innerRef:function(e){var n,a;d&&e&&u&&(n=e,a=function(){window.docusaurus.prefetch(b)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),a())}))}))).observe(n))},to:b})):o.a.createElement("a",Object(a.a)({},e,{href:b}))}},361:function(e,t,n){var a=n(25).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(10)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},363:function(e,t,n){"use strict";n(361);var a=n(0),r=n.n(a),o=n(358);t.a=function(e){var t=e.children,n=e.name;return r.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},364:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(360),i=n(357),l=n.n(i);n(132);t.a=function(e){var t=e.children,n=e.className,a=e.badge,i=e.leftIcon,s=e.rightIcon,c=e.size,b=e.target,u=e.to,p=l()("jump-to","jump-to--"+c,n),d=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},i&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+i})),r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(s||"chevron-right")+" arrow"}))));return b?r.a.createElement("a",{href:u,target:b,className:p},d):r.a.createElement(o.a,{to:u,className:p},d)}},365:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return a}))},368:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=(n(357),n(366)),i=n.n(o);n(133);t.a=function(e){var t=e.children,n=e.headingDepth,o=e.hideFeedbackQuestion,l="undefined"!=typeof window?window.location:null,s={title:"Tutorial on "+l+" failed",body:"The tutorial on:\n\n"+l+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},c="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(s),b=Object(a.useState)(null),u=b[0],p=b[1];return r.a.createElement("div",{className:"steps steps--h"+n},t,!o&&!u&&r.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",r.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return p("yes")}},"Yes"),"\xa0\xa0",r.a.createElement("a",{href:c,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==u&&r.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",r.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},371:function(e,t,n){"use strict";var a=n(1),r=(n(375),n(373),n(52),n(28),n(21),n(20),n(0)),o=n.n(r),i=n(379),l=n(357),s=n.n(l),c=n(366),b=n.n(c),u=n(378),p=37,d=39;function h(e){var t=e.block,n=e.centered,a=e.changeSelectedValue,r=e.className,i=e.handleKeydown,l=e.style,c=e.values,b=e.selectedValue,u=e.tabRefs;return o.a.createElement("div",{className:n?"tabs--centered":null},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",r,{"tabs--block":t}),style:l},c.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":b===t,className:s()("tab-item",{"tab-item--active":b===t}),key:t,ref:function(e){return u.push(e)},onKeyDown:function(e){return i(u,e.target,e)},onFocus:function(){return a(t)},onClick:function(){return a(t)}},n)}))))}function m(e){var t=e.placeholder,n=e.selectedValue,a=e.changeSelectedValue,r=e.size,l=e.values,s=l;if(s[0].group){var c=_.groupBy(s,"group");s=Object.keys(c).map((function(e){return{label:e,options:c[e]}}))}return o.a.createElement(i.a,{className:"react-select-container react-select--"+r,classNamePrefix:"react-select",options:s,isClearable:n,placeholder:t,value:l.find((function(e){return e.value==n})),onChange:function(e){return a(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,n=e.defaultValue,i=e.groupId,l=e.label,s=e.placeholder,c=e.select,g=e.size,v=(e.style,e.values),j=e.urlKey,O=Object(u.a)(),f=O.tabGroupChoices,y=O.setTabGroupChoices,w=Object(r.useState)(n),N=w[0],k=w[1];if(null!=i){var S=f[i];null!=S&&S!==N&&k(S)}var R=function(e){k(e),null!=i&&y(i,e)},T=[],I=function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}};return Object(r.useEffect)((function(){if("undefined"!=typeof window&&window.location&&j){var e=b.a.parse(window.location.search);e[j]&&k(e[j])}}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"margin-bottom--"+(g||"md")},l&&o.a.createElement("div",{className:"margin-vert--sm"},l),v.length>1&&(c?o.a.createElement(m,Object(a.a)({changeSelectedValue:R,handleKeydown:I,placeholder:s,selectedValue:N,size:g,tabRefs:T},e)):o.a.createElement(h,Object(a.a)({changeSelectedValue:R,handleKeydown:I,selectedValue:N,tabRefs:T},e)))),r.Children.toArray(t).filter((function(e){return e.props.value===N}))[0])}},372:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement(r.a.Fragment,null,e.children)}}}]);