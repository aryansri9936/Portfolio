import { Canvas } from '@react-three/fiber' import { OrbitControls, Float } from '@react-three/drei'

export default function App() { return ( <div className="w-full h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col"> <Canvas camera={{ position: [0, 0, 5], fov: 50 }}> <ambientLight intensity={0.6} /> <directionalLight position={[5, 5, 5]} /> <Float floatIntensity={1}> <mesh> <sphereGeometry args={[1, 32, 32]} /> <meshStandardMaterial color="orange" /> </mesh> </Float> <OrbitControls enableZoom={false} /> </Canvas>

<div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">Aryan Srivastava</h1>
    <p className="text-lg md:text-2xl mb-8">Full-Stack Developer | Creative Visionary | Future Innovator</p>
  </div>

  <div className="p-6 space-y-8 overflow-y-auto flex-1">
    <section>
      <h2 className="text-2xl font-semibold mb-2">About Me</h2>
      <p className="text-gray-300">
        I’m Aryan Srivastava, passionate about technology, fashion, and creativity. I build modern web apps with the MERN stack,
        explore Android development with Kotlin, and love experimenting with new business ideas. My goal is to merge style,
        storytelling, and software into experiences that stand out.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold mb-2">Projects</h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li><strong>Books Library App (MERN):</strong> Simplified Goodreads clone with JWT auth, reading progress, and ratings.</li>
        <li><strong>Indian Flag Validator:</strong> Interactive web app with animations, quizzes, and validators.</li>
        <li><strong>PiePayAutoBot4 (Android):</strong> Kotlin-based Android app prototype built in Android Studio.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-semibold mb-2">Skills</h2>
      <p className="text-gray-300">JavaScript, Python, Kotlin, HTML, CSS, React, Node.js, Express.js, MongoDB, Git, Android Studio, Google Colab</p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold mb-2">Contact</h2>
      <p className="text-gray-300">📧 Email: aryansrivastava03520@gmail.com</p>
      <p className="text-gray-300">💻 GitHub: <a href="https://github.com/aryansri9936" className="underline">aryansri9936</a></p>
      <p className="text-gray-300">🔗 LinkedIn: <a href="https://www.linkedin.com/in/aryan-srivastava-32b88a28a" className="underline">Aryan Srivastava</a></p>
    </section>
  </div>

  <footer className="bg-gray-800 text-center py-4 text-gray-400 text-sm">
    © {new Date().getFullYear()} Aryan Srivastava. All rights reserved.
  </footer>
</div>

) }

