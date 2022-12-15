/* eslint-disable prettier/prettier */
export interface NotificationsProps {
  content: string;
  category: string;
}

export class Notification {
  private props: NotificationsProps;

  constructor() {
    this.content = '';
  }

  public set content(content: string) {
    if (content.length < 5) {
      throw new Error();
    }

    this.props.content = content;
  }

  public get content(): string {
    return this.props.content;
  }
}

const notification = new Notification();

notification.content = 'mnsdklfngklsa';
