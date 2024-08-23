import { groq } from "next-sanity";

const postPreviewFields = groq`
  _id,
  title,
  date,
  excerpt,
  "slug": slug.current,
  "categories": categories[]->{name, "slug": slug.current, _id}
`;

const postFields = groq`
  _id,
  title,
  date,
  content,
  "featuredMedia": featuredMedia.asset->{title, url},
  "slug": slug.current,
  "categories": categories[]->{name, "slug": slug.current, _id}
`;

export const postsPreviewQuery = groq`
*[_type == "post" && date < $lastDate] | order(date desc)[0...$page] {
${postPreviewFields} }`;

export const postsByCategoryPreviewQuery = groq`
*[_type == "post" && $category in categories[]->slug.current && date < $lastDate] | order(date desc)[0...$page] {
${postPreviewFields} }`;

export const hasNextPreviewQuery = groq`
count(*[_type == "post" && date < $lastDate] | order(date desc)[0...$page] {
${postPreviewFields} }) > 0`;

export const hasNextCategoryPreviewQuery = groq`
count(*[_type == "post" && $category in categories[]->slug.current && date < $lastDate] | order(date desc)[0...$page] {
${postPreviewFields} }) > 0`;

export const postQuery = groq`
    *[_type == "post" && slug.current == $slug] {${postFields}}
`;

export const categoryQuery = groq`
*[_type == "category" && slug.current == $slug] { name, _id }`;
