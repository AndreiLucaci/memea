import { SET_IMAGES } from './constants';
import MemeModel from '../../models/MemeModel';

export const setImages = (images: any[]) => {
  const modelImages: MemeModel[] = images.map(
      image =>
        new MemeModel(
          image.id,
          image.name,
          image.url,
          image.width,
          image.height,
          image.box_count
        )
    );

    return {
      type: SET_IMAGES,
      payload: modelImages
    };
}
