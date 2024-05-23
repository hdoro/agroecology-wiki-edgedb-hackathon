import type { SourceCardData } from '@/queries'
import { ExternalLinkIcon } from 'lucide-react'
import UserAvatar from './UserAvatar'
import { Badge } from './ui/badge'
import { buttonVariants } from './ui/button'
import { Text } from './ui/text'

export default function SourceCard({ source }: { source: SourceCardData }) {
	if (source.type === 'GOROROBAS') {
		return (
			<>
				{source.users.map((user) => (
					<UserAvatar key={user.handle} user={user} size="md" />
				))}
			</>
		)
	}

	if (!source.credits) return null

	if (source.origin && URL.canParse(source.origin))
		return (
			<a
				href={source.origin as string}
				target="_blank"
				rel="noopener noreferrer"
				className={buttonVariants({
					tone: 'neutral',
					size: 'lg',
					mode: 'outline',
					className: 'gap-4 h-16 px-4',
				})}
				title={source.credits}
			>
				<ExternalLinkIcon className="w-[2em] h-auto flex-[0_0_max-content]" />
				<div>
					<Text level="h3" as="p" className="font-normal max-w-[20ch] truncate">
						{source.credits}
					</Text>
					<Text level="sm" as="p" className="text-muted-foreground">
						{new URL(source.origin).origin}
					</Text>
				</div>
			</a>
		)

	return (
		<Badge className="space-y-2" variant="outline" title={source.credits}>
			<Text level="p" as="p" className="max-w-[30ch] truncate">
				{source.credits}
			</Text>

			{source.origin && (
				<Text level="sm" className="max-w-[35ch] truncate">
					{source.origin}
				</Text>
			)}
		</Badge>
	)
}