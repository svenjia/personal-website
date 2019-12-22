import * as React from 'react'
import Link from 'next/link'
import { getDateObject } from '~/lib/getDateObject'
import { H5, P } from '~/components/Typography'
import { Card, PreviewImage, ReadingTime } from './style'
import { BlogPost } from '~/types';

interface Props {
  post: BlogPost
}

export default function OverthoughtPreviewCard({ post }: Props) {
  const { month, year, day } = getDateObject(post.published_at);
  const datestring = `${month.slice(0, 3)} ${day}, ${year}`;

  return (
    <Link href="/overthought/[slug]" as={`/overthought/${post.slug}`}>
      <a>
        <Card style={{ height: '100%' }}>
          {post.feature_image && <PreviewImage loading="lazy" src={post.feature_image} />}
          <H5 style={{ marginTop: 0 }}>{post.title}</H5>
          <P>{post.custom_excerpt || post.excerpt}</P>
          <ReadingTime>{post.reading_time}m read</ReadingTime>
        </Card>
      </a>
    </Link >
  )
}