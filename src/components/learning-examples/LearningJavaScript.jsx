const person = {
    name: 'Andi',
    address: {
        line1: 'Rua Deputado Benedito T de Carvalho Jr',
        city: 'Florianopolis',
        country: 'BR'
    },
    profiles: ['twitter', 'linkedin', 'facebook'],
    printProfile: () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}

export default function LearningJavaScript() {
    return (
        <>
            <div>{person.name}</div >
            <div>{person.address.line1}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.printProfile()}</div>
        </>
    )
        
}