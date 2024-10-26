export default function Login() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-gray-400 to-teal-400">
            <div className="w-full max-w-sm p-5">
                <form action="" method="post" aria-label="Login Form" className="bg-teal-900 text-white p-8 rounded-lg shadow-lg">
                    <h1 className="text-2xl text-center mb-5">Login</h1>
                    <div className="mb-5">
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            required
                            className="w-full h-12 bg-teal-800 border-2 border-teal-600 rounded-lg text-white text-lg px-5 transition-colors focus:border-white focus:outline-none placeholder:text-teal-300"
                        />
                    </div>
                    <div className="mb-5">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your Password"
                            required
                            className="w-full h-12 bg-teal-800 border-2 border-teal-600 rounded-lg text-white text-lg px-5 transition-colors focus:border-white focus:outline-none placeholder:text-teal-300"
                        />
                    </div>
                    <button type="submit" className="w-full h-11 bg-white text-teal-900 text-lg rounded-lg border-none cursor-pointer transition-colors hover:bg-gray-200">
                        Login
                    </button>
                    <div className="text-center text-sm mt-3">
                        Don't have an account? <a href="#" className="text-white underline hover:no-underline">Sign up</a>
                    </div>
                </form>
            </div>
        </div>
    )
}