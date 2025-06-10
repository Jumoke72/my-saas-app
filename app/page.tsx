import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="123" subject="Science" name="Neura the Brainy Explorer" topic="Neural Network of the brain" duration={45} color="#ffdace" />
        <CompanionCard
          id="456" subject="Maths" name="Countsy the Number Wizard" topic="Derivatives and Integrals" duration={30} color="#e5d0ff" />
        <CompanionCard
          id="789" subject="Language" name="Verba the Vocabulary Builder" topic="English Literature" duration={30} color="#bde7ff" />
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>

    </main>
  )
}

export default Page