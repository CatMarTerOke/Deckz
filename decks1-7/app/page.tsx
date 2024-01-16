import Image from 'next/image'
import Link from 'next/link'
import ModelButton from './components/modelButton'
import './globals.css'; 




export default function Home() {
  
  return (
    <>
      <Image src = '/images/DecksTopBlock.png' width= {1500} height={500} alt="topBlock"/>
      
      <section>
        <Link href="newUser">
          <Image src='/images/newUserButton.png' width={400} height={200} alt="newUserButton"/>
        </Link>
        <Link href="oldUser"><Image src='/images/oldUserButton.png' width={400} height={200} alt="oldUserButton"/> </Link>
        
      </section>
      
    
    
    </>
    
    
  )
}
