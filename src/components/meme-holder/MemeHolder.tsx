import React from "react";

import MemeModel from "../../models/MemeModel";

import connect from "react-redux";

type MemeHolderState = {
  images: MemeModel[];
};

export default class MemeHolder extends React.Component<{}, MemeHolderState> {
  memeTemplateImagesUrl: string = "https://api.imgflip.com/get_memes";

  constructor(params: any) {
    super(params);

    this.state = {
      images: []
    };
  }

  componentDidMount() {
    fetch(this.memeTemplateImagesUrl)
      .then(response => response.json())
      .then(response =>
        this.setState({
          images: this.getImages(response.data)
        })
      );
  }

  getImages(images: any[]): MemeModel[] {
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

    return modelImages;
  }

  render() {
    return (
      <div>
        {this.state.images.map(img => (
          <img src={img.url} key={img.id} alt={img.name} />
        ))}
      </div>
    );
  }
}
