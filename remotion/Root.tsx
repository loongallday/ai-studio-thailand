import { Composition } from "remotion";
import { WorkshopVideo } from "./WorkshopVideo";

export const Root: React.FC = () => {
  return (
    <Composition
      id="WorkshopVideo"
      component={WorkshopVideo}
      durationInFrames={180}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
