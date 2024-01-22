import {
  Container,
  Typography,
  Card,
  Stack,
  CardHeader,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material"
import CuwImg from "/cow.png"
import DogImg from "/dog.png"
import CatImg from "/cat.png"
import HorseImg from "/horse.png"

const CuwVoice: HTMLAudioElement = new Audio("/cow.mp3")
const DogVoice: HTMLAudioElement = new Audio("/dog.mp3")
const CatVoice: HTMLAudioElement = new Audio("/cat.mp3")
const HorseVoice: HTMLAudioElement = new Audio("/horse.mp3")

type Animal = {
  id: string
  img: string
  voice: HTMLAudioElement
}

let currentAudio: HTMLAudioElement | null = null

const animals: Animal[] = [
  {
    id: "1",
    img: CuwImg,
    voice: CuwVoice,
  },
  {
    id: "2",
    img: DogImg,
    voice: DogVoice,
  },
  {
    id: "3",
    img: CatImg,
    voice: CatVoice,
  },
  {
    id: "4",
    img: HorseImg,
    voice: HorseVoice,
  },
]

const Animals = () => {
  const playAnimalSound = (animal: Animal) => {
    // Проверяем, проигрывается ли уже звук
    if (currentAudio) {
      currentAudio.pause()
      currentAudio.currentTime = 0
    }

    // Устанавливаем текущий аудиофайл на новый
    currentAudio = animal.voice

    // Воспроизводим звук
    animal.voice.play()
  }

  return (
    <Box sx={{ background: "#262626", minHeight: "100vh", py: "1rem" }}>
      <Container>
        <Stack direction={"row"} gap={2} flexWrap="wrap">
          {animals.map(animal => (
            <Card
              key={animal.id}
              sx={{ width: "10rem", height: "10rem", cursor: "pointer" }}
              onMouseDown={() => playAnimalSound(animal)}
              onTouchStart={() => playAnimalSound(animal)}
            >
              <CardMedia component="img" image={animal.img} alt="Paella dish" />
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

export default Animals
