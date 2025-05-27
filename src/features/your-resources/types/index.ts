export interface ResourceCategory {
  id: string
  name: string
}

export interface Resource {
  id: string
  categoryId: string // MARK: could potentially be an array of categoryIds, keeping example simple with single non-optional field
  description: string
  imageSrc: string
}
