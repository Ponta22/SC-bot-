export default {
  command: ['123'],
  category: ['info'],
  description: 'Cek status bot',
  async run(msg, client, { user, Func }) {
    msg.reply('bot online')
  }
}
