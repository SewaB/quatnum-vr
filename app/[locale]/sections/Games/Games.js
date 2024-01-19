import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useTranslations } from 'next-intl'
import GamesContainer from './GamesContainer'

export default function Games() {
  const t = useTranslations('games')

  const gamesArray = [
    {
      name: 'Job Simulator',
      description:
        "In a world where robots have replaced all human jobs, step into the Job Simulator to learn what it was like 'to job'.",
      image: 'jobSimulator.jpg',
      players: 1
    },
    {
      name: 'Deadly Hunter',
      description:
        ' Deadly Hunter is an immersive first-person defense game designed exclusively for VR. You play as a renowned Orc hunter whose goal is to learn the enemy’s weaknesses and use the best-suited traps to blow their heads off!',
      image: 'deadlyHunter.jpg',
      players: 1
    },

    {
      name: 'Vox Machinae',
      description:
        'Strap yourself into the cockpit of a robot seven times taller than a Tyrannosaurus Rex and prepare to do battle in Vox Machinae: the ultimate giant robot combat action-simulator for both VR and standard screens.',
      image: 'voxmachinae.webp',
      players: 1
    },
    {
      name: 'Creed VR',
      description:
        'You are Adonis Creed, fighting toe-to-toe with the world’s top opponents to establish your boxing legacy. This intense cinematic experience features new Phantom Melee Technology for impactful VR melee combat so you can train, fight, and win like Creed.',
      image: 'creed.jpg',
      players: 2
    },
    {
      name: 'Spider-Man: Far From Home Virtual Reality',
      description:
        'Your time to swing through New York like Spider-Man has finally arrived! In breathtaking virtual reality, you’ll finally have the chance to scale and swing from the highest towers in Manhattan.  Just pick one of four Spider-Man suits and you’ll be launched into the clouds… but keep your eyes and ears peeled, a mysterious and colossal enemy is waiting.  Only you have the power to find and confront New York’s latest attacker in this thrilling, swinging adventure. ',
      image: 'spiderMan.jpg',
      players: 1
    },

    {
      name: 'Escape First',
      description:
        'Escape First is a multiplayer escape puzzle game for virtual reality or desktop PC. It includes 3 different escape rooms to choose from and can be played competitively, cooperatively or solo.',
      image: 'escapeFirst.jpg',
      players: 4
    },
    {
      name: 'Super Hot',
      description:
        "SUPERHOT blurs the lines between thoughtful strategy and unbridled madness: it's a first-person shooter where time moves only with you. There will be no refillable health bar here. There will be no successfully scattered ammunition. Only you - alone against everyone, with your bare hands. Grab weapons from falling enemies, shoot, slash and dodge bullets like Neo. SUPERHOT's unique graphics style is a long-awaited breakthrough in the shooter genre. Its spartan minimalism helps you focus on the main thing - the smoothness of gameplay and the cinematic beauty of combat.",
      image: 'superhot.jpg',
      players: 1
    },
    {
      name: 'Payday 2',
      description:
        "PAYDAY 2 VR is the full PAYDAY 2 experience, where you really get a sense of every cop, dozer, cloaker and medic closing in on you. Packed with weapons, heists and masks - PAYDAY 2 VR is one of the world's biggest VR games out there",
      image: 'payday.jpg',
      players: 4
    },
    {
      name: 'Doom VFR',
      description:
        'DOOM® VFR brings fast-paced combat to virtual reality. Severe tests await you at the UAC Martian base and in the depths of hell. Play as a cyber fighter activated by the UAC to fight demons, save the base on Mars and explore the world of DOOM from a completely new perspective. After the start of a demonic invasion of the UAC laboratory on Mars, you were the last survivor... but died. The UAC has transferred your consciousness into the artificial brain matrix so that you can restore stable operation of the base and stop the demons.',
      image: 'doom.jpg',
      players: 1
    },
    {
      name: 'Ragnarock',
      description:
        'Time to start the party? Ragnarock is a single-player and multiplayer immersive VR rhythm game where you play as the captain of a Viking ship. Your goal is to win the race. Smash the emerging runes with your two hammers while listening to epic Viking-inspired music. By hitting the runes accurately, you will create a combo, charge your hammers with energy and be able to activate acceleration! Would you dare to beat everyone else and put your name on the leaderboard?',
      image: 'ragnarock.jpg',
      players: 4
    },
    {
      name: 'Pavlov VR',
      description:
        "Pavlov vr is a multiplayer shooter in VR with heavy focus on community. Set in both modern and WWII era's, you can choose a variety of ways to play the game how you want it.",
      image: 'pavlov.jpg',
      players: 4
    },
    {
      name: 'Skyrim VR',
      description:
        "In Epic Roller Coasters you'll get the same feeling of a real roller coaster with a high level graphics and physics-based simulation. You'll go up and down seeing everything around you with our long range vision capabilities! Now you have the hability to exchange any cars between any tracks!Skyrim VR brings the open world to life. You will find battles with ancient dragons, wandering through the mountains and much more. Here you can act as you wish. Skyrim VR also includes the base game and official expansions Dawnguard, Hearthfire, and Dragonborn. Long-forgotten dragons have returned to Tamriel, and the fate of the empire hangs in the balance. Only you, the dragonborn, the hero whose appearance was predicted by the prophecy, can defeat the enemy.",
      image: 'skyrim.jpg',
      players: 1
    },
    {
      name: 'Epic Roller Coaster',
      description:
        "In Epic Roller Coasters you'll get the same feeling of a real roller coaster with a high level graphics and physics-based simulation. You'll go up and down seeing everything around you with our long range vision capabilities! Now you have the hability to exchange any cars between any tracks!",
      image: 'rollerCoaster.jpg',
      players: 1
    },
    {
      name: 'Elven Assassin',
      description:
        'Is there anything more epic than slaying hordes of orcs and dragons with a bow in Virtual Reality? When nothing comes to your mind, then you probably should try this. If you thought: "Of course, slaying them with my friends online in co-op mode!" then this is a matter of destiny. BECOME AN ELVEN ASSASSIN. Take a bow and kill hundreds of enemies that want to get into the elven town and destroy it. As an elven assassin, you will make spectacular shots like long-distance headshots.',
      image: 'elvenAssassin.jpg',
      players: 4
    },
    {
      name: 'Space Junkies',
      description:
        'In Minecraft, players explore a blocky, procedurally generated, three-dimensional world with virtually infinite terrain. Players can discover and extract raw materials, craft tools and items, and build structures, earthworks, and machines.',
      image: 'spaceJunkies.jpg',
      players: 4
    },
    {
      name: 'Minecraft',
      description:
        'In Minecraft, players explore a blocky, procedurally generated, three-dimensional world with virtually infinite terrain. Players can discover and extract raw materials, craft tools and items, and build structures, earthworks, and machines.',
      image: 'minecraft.jpg',
      players: 4
    },
    {
      name: 'After the Fall',
      description:
        'From the creators of Arizona Sunshine® comes an epic VR action FPS with intense co-op gameplay at its core that pits up to 4 players against a post-apocalyptic VR world filled with ferocious undead, mutated and twisted by the relentless cold.',
      image: 'afterTheFall.jpg',
      players: 4
    },
    {
      name: 'Propagation VR',
      description:
        'Combining survival horror and static wave shooting, Propagation VR will get your adrenaline pumping as you try to survive a zombie apocalypse. Armed only with your guns and your fists, fight off terrifying zombies and other multi-species mutants. Will you get out alive?',
      image: 'propagation.jpg',
      players: 4
    },

    {
      name: t('beatSaber'),
      description: t('beatSaberText'),
      image: 'beatSaber.jpg',
      players: 1
    },
    {
      name: t('arizonaSunshine'),
      description: t('arizonaSunshineText'),
      image: 'arizonaSunshine.jpg',
      players: 4
    },
    {
      name: t('halfLifeAlyx'),
      description: t('halfLifeAlyxText'),
      image: 'halfLifeAlyx.jpg',
      players: 1
    },

    {
      name: t('fancySkiing'),
      description: t('fancySkiingText'),
      image: 'fancySkiing.jpg',
      players: 1
    },

    {
      name: t('seriousSam'),
      description: t('seriousSamText'),
      image: 'seriousSam.jpg',
      players: 2
    },
    {
      name: t('phasmophobia'),
      description: t('phasmophobiaText'),
      image: 'phasmophobia.jpg',
      players: 4
    },
    {
      name: t('locoDojo'),
      description: t('locoDojoText'),
      image: 'locoDojo.jpg',
      players: 4
    },
    {
      name: 'Batman',
      description: '',
      image: 'batman.jpg',
      players: 1
    },
    {
      name: 'The Forest',
      description: '',
      image: 'forest.jpg',
      players: 1
    },
    {
      name: "Five Nights at Freddy's",
      description: '',
      image: 'freddys.jpg',
      players: 1
    },
    {
      name: 'Onward',
      description: '',
      image: 'onward.jpg',
      players: 1
    },
    {
      name: 'Gnog',
      description: '',
      image: 'gnog.jpg',
      players: 1
    }
  ]

  return (
    <Box component='section' id='games'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          py: { xs: 6, md: 12 },
          pb: { xs: 6, md: 9 },
          color: '#fff'
        }}
      >
        <Container
          maxWidth='lg'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: '4rem'
          }}
        >
          <Typography
            variant='h6'
            gutterBottom
            sx={{
              fontSize: { xs: '1.8rem', tb: '2.4rem' },
              fontWeight: 'bold',
              textAlign: 'center'
            }}
          >
            {t('title')}
          </Typography>
          <Typography
            variant='h6'
            sx={{
              fontSize: { xs: '1.4rem', tb: '2rem' },
              textAlign: 'center'
            }}
          >
            {t('subtitle')}
          </Typography>
        </Container>
        <GamesContainer gamesArray={gamesArray.slice(0, 10)} speed={9000} />
        <GamesContainer
          gamesArray={gamesArray.slice(10, 20)}
          rtl={true}
          speed={11000}
        />
        <GamesContainer gamesArray={gamesArray.slice(20, 30)} speed={5000} />
        {/* <Box
          sx={{
            display: { xs: 'flex', sm: 'none' },
            gap: '1.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {gamesArray.slice(0, 10).map((item, i) => (
            <Box
              key={i}
              sx={{
                height: '160px',
                width: '270px',
                borderRadius: '0.8rem',
                display: 'flex',
                justifyContent: 'flex-end',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#000',
                '&:hover': {
                  boxShadow: '0px 0px 15px -2px rgba(117, 252, 206,1)',
                  transition: 'all 0.3s'
                }
              }}
            >
              <Image src={'/games/' + item.image} sizes='200px' fill alt='' />
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {gamesArray.map((item, i) => (
            <Box
              key={i}
              sx={{
                height: '150px',
                borderRadius: '0.8rem',
                display: 'flex',
                justifyContent: 'flex-end',
                flexDirection: 'column',
                position: 'relative',
                width: '230px',
                overflow: 'hidden',
                backgroundColor: '#000',
                '&:hover': {
                  boxShadow: '0px 0px 15px -2px rgba(117, 252, 206,1)',
                  transition: 'all 0.3s'
                }
              }}
            >
              <Image src={'/games/' + item.image} sizes='200px' fill alt='' />
            </Box>
          ))}
        </Box> */}
      </Box>
    </Box>
  )
}
