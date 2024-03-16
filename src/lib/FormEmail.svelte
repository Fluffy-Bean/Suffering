<script>
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    export let formName = 'email';
    export let emailValue = '';
    let isValid = true;

    const validateEmail = (e) => {
        emailValue = e.target.value;
        isValid = regex.test(emailValue);
    }

</script>

<div>
    <label for="email">email</label>
    <input
        type="text"
        id="email"
        autocomplete="off"
        placeholder="Enter your email address"
        name={formName}
        bind:value={emailValue}
        on:input={validateEmail}
    />
    {#if !isValid}<span>Email is not valid</span>{/if}
</div>

<style lang="less">
  div {
    margin-bottom: 16px;

    display: flex;
    flex-direction: column;

    position: relative;
  }

  label {
    margin-bottom: 8px;
  }

  input {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    margin-bottom: 8px;
  }

  span {
    position: absolute;
    bottom: -16px;
    color: red;
  }
</style>
