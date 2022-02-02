<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Liker from "./liker.svelte";
  import BorderDecorator from "./BorderDecorator.svelte";
</script>

<Meta title="Native/Liker" component={Liker} />

<Template let:args>
  <BorderDecorator>
    <Liker {...args} />
  </BorderDecorator>
</Template>

<Story name="Default" />
