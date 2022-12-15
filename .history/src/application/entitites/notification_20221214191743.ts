/* eslint-disable prettier/prettier */
export interface NotificationsProps {
  content: string;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private props: NotificationsProps;

  constructor(props: NotificationsProps) {
    this.props = props;
  }

  public set content(content: string) {
    this.props.content = content;
  }

  public get content(): string {
    return this.props.content;
  }
}
